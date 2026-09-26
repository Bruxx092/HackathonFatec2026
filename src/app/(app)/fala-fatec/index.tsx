import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Button, Card, Input, StatusPill } from "@/components";
import { usuariosMock } from "@/services/mocks/usuarios";
import { criarSolicitacao, listarSolicitacoes } from "@/services/solicitacoes";
import { colors, typography } from "@/theme";
import type { Solicitacao } from "@/types";

const usuario = usuariosMock[0];

export default function FalaFatec() {
  const [solicitacoes, setSolicitacoes] = useState<Solicitacao[]>([]);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("Infraestrutura");
  const [setor, setSetor] = useState("Infraestrutura");

  useEffect(() => {
    listarSolicitacoes(usuario.id).then(setSolicitacoes);
  }, []);

  async function handleEnviar() {
    if (!titulo.trim() || !descricao.trim()) {
      return;
    }
    const nova = await criarSolicitacao({
      userId: usuario.id,
      categoria,
      setor,
      titulo: titulo.trim(),
      descricao: descricao.trim(),
    });
    setSolicitacoes((atual) => [nova, ...atual]);
    setTitulo("");
    setDescricao("");
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.secao}>Nova solicitação</Text>
      <Input label="Título" value={titulo} onChangeText={setTitulo} placeholder="Resumo do problema" />
      <Input
        label="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Descreva sua dúvida ou solicitação"
      />
      <Input label="Categoria" value={categoria} onChangeText={setCategoria} />
      <Input label="Setor" value={setor} onChangeText={setSetor} />
      <Button label="Enviar solicitação" onPress={handleEnviar} />

      <Text style={styles.secao}>Minhas solicitações</Text>
      {solicitacoes.map((solicitacao) => (
        <Card key={solicitacao.id}>
          <View style={styles.linha}>
            <Text style={styles.titulo}>{solicitacao.titulo}</Text>
            <StatusPill status={solicitacao.status} />
          </View>
          <Text style={styles.texto}>{solicitacao.descricao}</Text>
          <Text style={styles.meta}>Protocolo {solicitacao.protocolo}</Text>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },
  secao: {
    fontFamily: typography.family.extrabold,
    fontSize: typography.size.title,
    color: colors.textStrong,
    marginBottom: 12,
    marginTop: 16,
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titulo: {
    flex: 1,
    fontFamily: typography.family.semibold,
    fontSize: typography.size.subtitle,
    color: colors.textStrong,
    marginRight: 8,
  },
  texto: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.body,
    color: colors.text,
    marginTop: 8,
  },
  meta: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.caption,
    color: colors.text,
    marginTop: 8,
  },
});
