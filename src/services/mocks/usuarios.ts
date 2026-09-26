import type { User } from "@/types";

export const usuariosMock: User[] = [
  {
    id: "u1",
    nome: "Ana Souza",
    email: "ana.souza@fatec.sp.gov.br",
    tipoUsuario: "estudante",
    unidade: "Fatec Itaquera - Prof. Miguel Reale",
    curso: "Desenvolvimento de Software Multiplataforma",
    semestre: 3,
    turno: "Tarde",
  },
  {
    id: "u2",
    nome: "Prof. Carlos Henrique",
    email: "carlos.henrique@fatec.sp.gov.br",
    tipoUsuario: "professor",
    unidade: "Fatec Itaquera - Prof. Miguel Reale",
    curso: "Desenvolvimento de Software Multiplataforma",
    turmas: ["dsm-3-tarde", "dsm-4-tarde"],
  },
  {
    id: "u3",
    nome: "Coord. Mariana Lopes",
    email: "coordenacao.dsm@fatec.sp.gov.br",
    tipoUsuario: "coordenador",
    unidade: "Fatec Itaquera - Prof. Miguel Reale",
    cursoCoordenado: "Desenvolvimento de Software Multiplataforma",
  },
  {
    id: "u4",
    nome: "Lucas Mendes",
    email: "lucas.mendes@fatec.sp.gov.br",
    tipoUsuario: "estudante",
    unidade: "Fatec Itaquera - Prof. Miguel Reale",
    curso: "Automação Industrial",
    semestre: 2,
    turno: "Noite",
  },
];
