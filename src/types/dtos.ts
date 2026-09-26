import { Role, User } from "./index";

export interface LoginDTO {
  email: string;
  senha: string;
}

export interface UserDTO {
  id: string;
  nome: string;
  email: string;
  tipoUsuario: Role;
  unidade: string;
  curso?: string;
  semestre?: number;
  turno?: string;
  turmas?: string[];
  cursoCoordenado?: string;
}

export function validateLoginDTO(data: LoginDTO): void {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    throw new Error("Formato de e-mail inválido.");
  }
  if (!data.email.trim().toLowerCase().endsWith("@fatec.sp.gov.br")) {
    throw new Error("Utilize um e-mail institucional @fatec.sp.gov.br.");
  }
  if (!data.senha || data.senha.length < 6) {
    throw new Error("A senha deve conter no mínimo 6 caracteres.");
  }
}

export function mapUserDocumentToEntity(id: string, docData: any): User {
  if (!docData.nome || !docData.email || !docData.tipoUsuario) {
    throw new Error("Dados de usuário corrompidos ou incompletos no Firestore.");
  }
  return {
    id,
    nome: String(docData.nome),
    email: String(docData.email),
    tipoUsuario: docData.tipoUsuario as Role,
    unidade: docData.unidade || "Fatec",
    curso: docData.curso,
    semestre: docData.semestre ? Number(docData.semestre) : undefined,
    turno: docData.turno,
    turmas: docData.turmas || [],
    cursoCoordenado: docData.cursoCoordenado,
  };
}