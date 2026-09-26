import type { Evento } from "@/types";

export const eventosMock: Evento[] = [
  {
    id: "e1",
    titulo: "Prova de Engenharia de Software",
    descricao: "Avaliação individual sobre metodologias ágeis e engenharia de requisitos.",
    categoria: "Prova",
    data: "2026-10-06",
    horario: "14:50",
    local: "Sala 12",
    publicoAlvo: "DSM 3º semestre - Tarde",
  },
  {
    id: "e2",
    titulo: "Palestra: Carreira em Computação em Nuvem",
    descricao: "Profissionais convidados falam sobre certificações e oportunidades na área de cloud.",
    categoria: "Palestra",
    data: "2026-10-08",
    horario: "19:00",
    local: "Auditório",
    publicoAlvo: "Todos os cursos",
  },
  {
    id: "e3",
    titulo: "Entrega do Projeto Integrador",
    descricao: "Prazo final para submissão do Projeto Integrador no portal.",
    categoria: "Entrega",
    data: "2026-10-10",
    horario: "23:59",
    local: "Online",
    publicoAlvo: "DSM 3º semestre - Tarde",
  },
];
