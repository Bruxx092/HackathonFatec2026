export type Role = "estudante" | "professor" | "coordenador";

export interface Turma {
  id: string;
  curso: string;
  semestre: number;
  turno: string;
}

export interface User {
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

export type AvisoPrioridade = "urgente" | "importante" | "informativo";
export type AvisoOrigem = "institucional" | "coordenacao" | "professor";

export interface Aviso {
  id: string;
  titulo: string;
  mensagem: string;
  categoria: string;
  prioridade: AvisoPrioridade;
  origem: AvisoOrigem;
  curso?: string;
  turma?: string;
  autor: string;
  dataPublicacao: string;
  lido?: boolean;
}

export interface Evento {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
  data: string;
  horario: string;
  local: string;
  publicoAlvo?: string;
}

export interface Post {
  id: string;
  userId: string;
  titulo: string;
  conteudo: string;
  categoria: string;
  dataCriacao: string;
}

export interface Resposta {
  id: string;
  postId: string;
  userId: string;
  conteudo: string;
  oficial: boolean;
  dataCriacao: string;
}

export type SolicitacaoStatus = "enviado" | "recebido" | "em_analise" | "resolvido";

export interface AtualizacaoSolicitacao {
  id: string;
  solicitacaoId: string;
  status: SolicitacaoStatus;
  mensagem: string;
  data: string;
}

export interface Solicitacao {
  id: string;
  userId: string;
  categoria: string;
  setor: string;
  titulo: string;
  descricao: string;
  status: SolicitacaoStatus;
  protocolo: string;
  dataCriacao: string;
  atualizacoes: AtualizacaoSolicitacao[];
}

export interface Oportunidade {
  id: string;
  titulo: string;
  tipo: string;
  descricao: string;
  link: string;
  prazo: string;
  dataPublicacao: string;
}

export type ConversaTipo = "canal" | "dm";

export interface Conversa {
  id: string;
  tipo: ConversaTipo;
  nome: string;
  setor?: string;
  participantes: string[];
  atualizadaEm: string;
}

export interface Mensagem {
  id: string;
  conversaId: string;
  autorId: string;
  texto: string;
  enviadaEm: string;
}
