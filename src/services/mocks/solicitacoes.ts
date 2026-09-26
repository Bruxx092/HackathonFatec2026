import type { Solicitacao } from "@/types";

export const solicitacoesMock: Solicitacao[] = [
  {
    id: "s1",
    userId: "u1",
    categoria: "Infraestrutura",
    setor: "Infraestrutura",
    titulo: "Ar-condicionado da sala 12 desligado",
    descricao: "O ar-condicionado da sala 12 está desligado há duas semanas.",
    status: "em_analise",
    protocolo: "FATEC-2026-1042",
    dataCriacao: "2026-09-18T10:00:00.000Z",
    atualizacoes: [
      {
        id: "at1",
        solicitacaoId: "s1",
        status: "enviado",
        mensagem: "Solicitação registrada.",
        data: "2026-09-18T10:00:00.000Z",
      },
      {
        id: "at2",
        solicitacaoId: "s1",
        status: "recebido",
        mensagem: "Recebida pela infraestrutura.",
        data: "2026-09-18T14:20:00.000Z",
      },
      {
        id: "at3",
        solicitacaoId: "s1",
        status: "em_analise",
        mensagem: "Equipe técnica agendou a vistoria do equipamento.",
        data: "2026-09-22T09:10:00.000Z",
      },
    ],
  },
  {
    id: "s2",
    userId: "u1",
    categoria: "Biblioteca",
    setor: "Biblioteca",
    titulo: "Renovação de empréstimo",
    descricao: "Solicito a renovação do empréstimo do livro de Engenharia de Software.",
    status: "enviado",
    protocolo: "FATEC-2026-1087",
    dataCriacao: "2026-09-25T16:45:00.000Z",
    atualizacoes: [
      {
        id: "at4",
        solicitacaoId: "s2",
        status: "enviado",
        mensagem: "Solicitação registrada.",
        data: "2026-09-25T16:45:00.000Z",
      },
    ],
  },
];
