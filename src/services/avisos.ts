import type { Aviso } from "@/types";
import { delay } from "./delay";
import { avisosMock } from "./mocks/avisos";

export type AvisoFiltro = "todos" | "institucional" | "meu-curso" | "minha-turma";

export interface ContextoUsuario {
  curso?: string;
  turma?: string;
}

export async function listarAvisos(
  filtro: AvisoFiltro = "todos",
  contexto: ContextoUsuario = {},
): Promise<Aviso[]> {
  await delay(200);
  switch (filtro) {
    case "institucional":
      return avisosMock.filter((aviso) => aviso.origem === "institucional");
    case "meu-curso":
      return avisosMock.filter(
        (aviso) => aviso.origem === "institucional" || aviso.curso === contexto.curso,
      );
    case "minha-turma":
      return avisosMock.filter(
        (aviso) =>
          aviso.origem === "institucional" ||
          aviso.curso === contexto.curso ||
          aviso.turma === contexto.turma,
      );
    default:
      return avisosMock;
  }
}

export async function obterAviso(id: string): Promise<Aviso | undefined> {
  await delay(150);
  return avisosMock.find((aviso) => aviso.id === id);
}
