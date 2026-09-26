import type { Conversa, Mensagem } from "@/types";
import { delay } from "./delay";
import {
  conversasMock,
  mensagensMock,
  remetentesAutomaticos,
  respostasAutomaticas,
} from "./mocks/conversas";

const conversas: Conversa[] = conversasMock.map((conversa) => ({ ...conversa }));
const mensagens: Mensagem[] = mensagensMock.map((mensagem) => ({ ...mensagem }));
const indiceResposta: Record<string, number> = {};

export interface ResumoConversa {
  conversa: Conversa;
  ultimaMensagem?: Mensagem;
}

function ultimaDe(conversaId: string): Mensagem | undefined {
  return mensagens
    .filter((mensagem) => mensagem.conversaId === conversaId)
    .sort((a, b) => a.enviadaEm.localeCompare(b.enviadaEm))
    .at(-1);
}

export async function listarResumos(): Promise<ResumoConversa[]> {
  await delay(150);
  return conversas
    .map((conversa) => ({ conversa, ultimaMensagem: ultimaDe(conversa.id) }))
    .sort((a, b) => b.conversa.atualizadaEm.localeCompare(a.conversa.atualizadaEm));
}

export async function obterConversa(id: string): Promise<Conversa | undefined> {
  await delay(100);
  return conversas.find((conversa) => conversa.id === id);
}

export async function listarMensagens(conversaId: string): Promise<Mensagem[]> {
  await delay(150);
  return mensagens
    .filter((mensagem) => mensagem.conversaId === conversaId)
    .sort((a, b) => a.enviadaEm.localeCompare(b.enviadaEm));
}

export async function enviarMensagem(
  conversaId: string,
  autorId: string,
  texto: string,
): Promise<Mensagem> {
  await delay(120);
  const agora = new Date().toISOString();
  const mensagem: Mensagem = {
    id: `m-${Date.now()}`,
    conversaId,
    autorId,
    texto,
    enviadaEm: agora,
  };
  mensagens.push(mensagem);
  const conversa = conversas.find((item) => item.id === conversaId);
  if (conversa) {
    conversa.atualizadaEm = agora;
  }
  return mensagem;
}

export async function responderAutomatico(conversaId: string): Promise<Mensagem | undefined> {
  const respostas = respostasAutomaticas[conversaId];
  const autorId = remetentesAutomaticos[conversaId];
  if (!respostas || respostas.length === 0 || !autorId) {
    return undefined;
  }
  await delay(1100);
  const indice = indiceResposta[conversaId] ?? 0;
  indiceResposta[conversaId] = (indice + 1) % respostas.length;
  const agora = new Date().toISOString();
  const mensagem: Mensagem = {
    id: `m-${Date.now()}-r`,
    conversaId,
    autorId,
    texto: respostas[indice],
    enviadaEm: agora,
  };
  mensagens.push(mensagem);
  const conversa = conversas.find((item) => item.id === conversaId);
  if (conversa) {
    conversa.atualizadaEm = agora;
  }
  return mensagem;
}

export async function obterConversaComPessoa(
  pessoaId: string,
  usuarioId: string,
): Promise<Conversa | undefined> {
  return conversas.find(
    (conversa) =>
      conversa.tipo === "dm" &&
      conversa.participantes.includes(pessoaId) &&
      conversa.participantes.includes(usuarioId),
  );
}
