import type { Conversa, Mensagem } from "@/types";

export const conversasMock: Conversa[] = [
  {
    id: "c-secretaria",
    tipo: "canal",
    nome: "Secretaria",
    setor: "Secretaria",
    participantes: ["todos"],
    atualizadaEm: "2026-09-25T13:00:00.000Z",
  },
  {
    id: "c-biblioteca",
    tipo: "canal",
    nome: "Biblioteca",
    setor: "Biblioteca",
    participantes: ["todos"],
    atualizadaEm: "2026-09-25T15:20:00.000Z",
  },
  {
    id: "c-infra",
    tipo: "canal",
    nome: "Infraestrutura",
    setor: "Infraestrutura",
    participantes: ["todos"],
    atualizadaEm: "2026-09-26T10:10:00.000Z",
  },
  {
    id: "c-coordenacao",
    tipo: "canal",
    nome: "Coordenação DSM",
    setor: "Coordenação",
    participantes: ["todos"],
    atualizadaEm: "2026-09-26T12:00:00.000Z",
  },
  {
    id: "d-carlos",
    tipo: "dm",
    nome: "Prof. Carlos Henrique",
    participantes: ["u1", "u2"],
    atualizadaEm: "2026-09-26T14:35:00.000Z",
  },
  {
    id: "d-mariana",
    tipo: "dm",
    nome: "Coord. Mariana Lopes",
    participantes: ["u1", "u3"],
    atualizadaEm: "2026-09-24T09:15:00.000Z",
  },
  {
    id: "d-lucas",
    tipo: "dm",
    nome: "Lucas Mendes",
    participantes: ["u1", "u4"],
    atualizadaEm: "2026-09-26T11:45:00.000Z",
  },
];

export const mensagensMock: Mensagem[] = [
  {
    id: "m1",
    conversaId: "c-secretaria",
    autorId: "secretaria",
    texto: "Olá! Este é o canal da Secretaria Acadêmica.",
    enviadaEm: "2026-09-25T13:00:00.000Z",
  },
  {
    id: "m2",
    conversaId: "c-secretaria",
    autorId: "secretaria",
    texto: "Atendimento presencial de segunda a sexta, das 8h às 20h.",
    enviadaEm: "2026-09-25T13:05:00.000Z",
  },
  {
    id: "m3",
    conversaId: "c-biblioteca",
    autorId: "biblioteca",
    texto: "Renovações de empréstimo podem ser solicitadas por aqui.",
    enviadaEm: "2026-09-25T15:20:00.000Z",
  },
  {
    id: "m4",
    conversaId: "c-infra",
    autorId: "infra",
    texto: "Recebemos o relato sobre o ar-condicionado da sala 12.",
    enviadaEm: "2026-09-26T10:05:00.000Z",
  },
  {
    id: "m5",
    conversaId: "c-infra",
    autorId: "infra",
    texto: "A vistoria técnica está agendada para 27/09, pela manhã.",
    enviadaEm: "2026-09-26T10:10:00.000Z",
  },
  {
    id: "m6",
    conversaId: "c-coordenacao",
    autorId: "coordenacao",
    texto: "A semana de provas do 3º semestre de DSM começa em 06/10.",
    enviadaEm: "2026-09-26T12:00:00.000Z",
  },
  {
    id: "m7",
    conversaId: "d-carlos",
    autorId: "u2",
    texto: "Pessoal, a aula de hoje é no Laboratório de Desenvolvimento Multiplataforma.",
    enviadaEm: "2026-09-26T14:30:00.000Z",
  },
  {
    id: "m8",
    conversaId: "d-carlos",
    autorId: "u1",
    texto: "Professor, o material da aula já está disponível?",
    enviadaEm: "2026-09-26T14:33:00.000Z",
  },
  {
    id: "m9",
    conversaId: "d-carlos",
    autorId: "u2",
    texto: "Sim, acabei de publicar. Qualquer dúvida me chame por aqui.",
    enviadaEm: "2026-09-26T14:35:00.000Z",
  },
  {
    id: "m10",
    conversaId: "d-mariana",
    autorId: "u3",
    texto: "Oi Ana, recebi seu pedido de orientação de Projeto Integrador.",
    enviadaEm: "2026-09-24T09:15:00.000Z",
  },
  {
    id: "m11",
    conversaId: "d-lucas",
    autorId: "u4",
    texto: "Bora estudar Engenharia de Software hoje à tarde?",
    enviadaEm: "2026-09-26T11:45:00.000Z",
  },
];

export const nomesAutores: Record<string, string> = {
  u1: "Ana Souza",
  u2: "Prof. Carlos Henrique",
  u3: "Coord. Mariana Lopes",
  u4: "Lucas Mendes",
  secretaria: "Secretaria",
  biblioteca: "Biblioteca",
  infra: "Infraestrutura",
  coordenacao: "Coordenação DSM",
};

export const respostasAutomaticas: Record<string, string[]> = {
  "c-secretaria": [
    "Recebemos sua mensagem. Vamos responder em breve.",
    "Obrigado pelo contato! Sua dúvida foi encaminhada ao setor responsável.",
  ],
  "c-biblioteca": [
    "Sua solicitação foi registrada. A biblioteca responde em até 1 dia útil.",
    "Anotado! Você receberá a confirmação por aqui.",
  ],
  "c-infra": [
    "Chamado atualizado. A equipe técnica foi notificada.",
    "Obrigado pelo retorno! Vamos acompanhar e avisar por aqui.",
  ],
  "c-coordenacao": [
    "Recebido! A coordenação vai retornar em breve.",
    "Anotado. Qualquer novidade avisamos por este canal.",
  ],
  "d-carlos": [
    "Perfeito, obrigado pelo retorno!",
    "Combinado! Qualquer coisa me chame por aqui.",
  ],
  "d-mariana": [
    "Ótimo, vou verificar e te aviso.",
    "Certo! Assim que tiver a resposta te chamo.",
  ],
  "d-lucas": [
    "Boa! Vamos sim.",
    "Fechado, te encontro na biblioteca.",
  ],
};

export const remetentesAutomaticos: Record<string, string> = {
  "c-secretaria": "secretaria",
  "c-biblioteca": "biblioteca",
  "c-infra": "infra",
  "c-coordenacao": "coordenacao",
  "d-carlos": "u2",
  "d-mariana": "u3",
  "d-lucas": "u4",
};
