import type { Evento } from "@/types";
import { delay } from "./delay";
import { eventosMock } from "./mocks/eventos";

export async function listarEventos(): Promise<Evento[]> {
  await delay(200);
  return eventosMock;
}
