import type { Solicitacao } from "@/types";
import { delay } from "./delay";
import { solicitacoesMock } from "./mocks/solicitacoes";

export interface NovaSolicitacao {
  userId: string;
  categoria: string;
  setor: string;
  titulo: string;
  descricao: string;
}

function gerarProtocolo(): string {
  const ano = new Date().getFullYear();
  const numero = Math.floor(1000 + Math.random() * 9000);
  return `FATEC-${ano}-${numero}`;
}

export async function listarSolicitacoes(userId: string): Promise<Solicitacao[]> {
  await delay(200);
  return solicitacoesMock.filter((solicitacao) => solicitacao.userId === userId);
}

export async function criarSolicitacao(dados: NovaSolicitacao): Promise<Solicitacao> {
  await delay(300);
  const agora = new Date().toISOString();
  const id = `s-${Date.now()}`;
  return {
    id,
    ...dados,
    status: "enviado",
    protocolo: gerarProtocolo(),
    dataCriacao: agora,
    atualizacoes: [
      {
        id: `at-${Date.now()}`,
        solicitacaoId: id,
        status: "enviado",
        mensagem: "Solicitação registrada.",
        data: agora,
      },
    ],
  };
}
