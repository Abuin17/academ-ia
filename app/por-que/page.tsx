import { PorqueNav } from "@/components/por-que/PorqueNav";
import { ScrollHint } from "@/components/por-que/ScrollHint";
import { Apertura } from "@/components/por-que/Apertura";
import { Oportunidad } from "@/components/por-que/Oportunidad";
import { ColumnaOperaciones } from "@/components/por-que/ColumnaOperaciones";
import { EjemplosNarrados } from "@/components/por-que/EjemplosNarrados";
import { Diferenciacion } from "@/components/por-que/Diferenciacion";
import { Ruta } from "@/components/por-que/Ruta";
import { Bifurcacion } from "@/components/por-que/Bifurcacion";

export default function PorquePage() {
  return (
    <>
      <PorqueNav />
      <ScrollHint />
      <main>
        <Apertura />
        <Oportunidad />
        <ColumnaOperaciones />
        <EjemplosNarrados />
        <Diferenciacion />
        <Ruta />
        <Bifurcacion />
      </main>
    </>
  );
}
