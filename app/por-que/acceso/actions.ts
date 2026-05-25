"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { ACCESS_COOKIE } from "@/lib/por-que";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 días

type State =
  | { ok: true }
  | { ok: false; message: string };

function getExpectedPassword(ruta: string): string | null {
  if (ruta === "inversor") return process.env.INVESTOR_PASSWORD ?? null;
  if (ruta === "operador") return process.env.OPERATOR_PASSWORD ?? null;
  return null;
}

/**
 * Compara la contraseña introducida con la variable de entorno
 * correspondiente. Si coincide, deja una cookie httpOnly y redirige a la
 * ruta privada. Si no, devuelve un mensaje de error al cliente.
 *
 * No es un sistema de seguridad criptográfico: es un gating narrativo
 * (lo dice explícitamente el brief). Comparación directa contra env var.
 */
export async function submitAccess(
  _prevState: State,
  formData: FormData,
): Promise<State> {
  const ruta = String(formData.get("ruta") ?? "");
  const password = String(formData.get("password") ?? "");

  if (ruta !== "inversor" && ruta !== "operador") {
    return { ok: false, message: "Elige una ruta antes de continuar." };
  }

  if (!password) {
    return { ok: false, message: "Introduce la contraseña." };
  }

  const expected = getExpectedPassword(ruta);

  if (!expected) {
    // Falta la variable de entorno en el entorno actual.
    return {
      ok: false,
      message:
        "El acceso a esta ruta aún no está disponible. Inténtalo de nuevo más tarde.",
    };
  }

  if (password !== expected) {
    return {
      ok: false,
      message:
        "La contraseña no es correcta. Verifica que estás en la ruta correcta.",
    };
  }

  const store = await cookies();
  store.set({
    name: ACCESS_COOKIE,
    value: ruta,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });

  redirect(`/por-que/${ruta}`);
}
