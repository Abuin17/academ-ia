/**
 * Constantes y helpers compartidos del microsite /por-que.
 * Se mantiene aislado de `proxy.ts` para no acoplar la server action al
 * fichero de runtime edge.
 */

export const ACCESS_COOKIE = "ai-sapiens-access";

export type Audience = "inversor" | "operador";

export const PROTECTED_ROUTES: Record<string, Audience> = {
  "/por-que/inversor": "inversor",
  "/por-que/operador": "operador",
};
