import type { User } from "@/types";
import { delay } from "./delay";
import { usuariosMock } from "./mocks/usuarios";

const DOMINIO_INSTITUCIONAL = "fatec.sp.gov.br";

export function isEmailInstitucional(email: string): boolean {
  return email.trim().toLowerCase().endsWith(`@${DOMINIO_INSTITUCIONAL}`);
}

export async function entrar(email: string, senha: string): Promise<User> {
  if (!isEmailInstitucional(email)) {
    throw new Error("Use seu e-mail institucional @fatec.sp.gov.br.");
  }
  await delay(300);
  const usuario = usuariosMock.find((u) => u.email.toLowerCase() === email.trim().toLowerCase());
  if (!usuario || senha.length < 4) {
    throw new Error("E-mail ou senha inválidos.");
  }
  return usuario;
}
