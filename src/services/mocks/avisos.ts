import type { Aviso } from "@/types";

export const avisosMock: Aviso[] = [
  {
    id: "a1",
    titulo: "Semana de provas do 3º semestre de DSM",
    mensagem:
      "As provas do 3º semestre de Desenvolvimento de Software Multiplataforma acontecem entre 06 e 10 de outubro. Confira o horário da sua turma no mural da coordenação.",
    categoria: "Provas",
    prioridade: "urgente",
    origem: "coordenacao",
    curso: "Desenvolvimento de Software Multiplataforma",
    autor: "Coord. Mariana Lopes",
    dataPublicacao: "2026-09-24T13:00:00.000Z",
  },
  {
    id: "a2",
    titulo: "Mudança de sala da aula de Banco de Dados",
    mensagem:
      "A aula de Banco de Dados de hoje será no Laboratório de Desenvolvimento Multiplataforma, às 14h50, por causa da manutenção na sala 12.",
    categoria: "Aulas",
    prioridade: "importante",
    origem: "professor",
    curso: "Desenvolvimento de Software Multiplataforma",
    turma: "dsm-3-tarde",
    autor: "Prof. Carlos Henrique",
    dataPublicacao: "2026-09-26T11:30:00.000Z",
  },
  {
    id: "a3",
    titulo: "Requerimento de estágio: prazo até 30/09",
    mensagem:
      "Estudantes que iniciaram estágio neste semestre devem entregar o requerimento na secretaria até 30/09. Documentos fora do prazo entram na próxima janela.",
    categoria: "Secretaria",
    prioridade: "informativo",
    origem: "institucional",
    autor: "Secretaria Acadêmica",
    dataPublicacao: "2026-09-22T09:00:00.000Z",
  },
  {
    id: "a4",
    titulo: "Inscrições abertas para o Hackathon Fatec 2026",
    mensagem:
      "As inscrições para o Hackathon Fatec 2026 estão abertas até sexta-feira. Forme sua equipe de até 4 pessoas e inscreva-se na coordenação.",
    categoria: "Eventos",
    prioridade: "importante",
    origem: "institucional",
    autor: "Assessoria de Comunicação",
    dataPublicacao: "2026-09-20T15:00:00.000Z",
  },
];
