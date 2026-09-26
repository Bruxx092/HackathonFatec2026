import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

import { BadgeOficial } from "@/components";
import { obterAviso } from "@/services/avisos";
import { colors, typography } from "@/theme";
import type { Aviso } from "@/types";

export default function DetalheAviso() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [aviso, setAviso] = useState<Aviso | undefined>();

  useEffect(() => {
    if (id) {
      obterAviso(id).then(setAviso);
    }
  }, [id]);

  if (!aviso) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.texto}>Carregando aviso...</Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {aviso.origem !== "professor" ? <BadgeOficial /> : null}
      <Text style={styles.titulo}>{aviso.titulo}</Text>
      <Text style={styles.meta}>
        {aviso.autor} · {aviso.categoria} ·{" "}
        {new Date(aviso.dataPublicacao).toLocaleDateString("pt-BR")}
      </Text>
      <Text style={styles.texto}>{aviso.mensagem}</Text>
      <Text style={styles.publico}>
        Público-alvo: {aviso.turma ?? aviso.curso ?? "Todos os estudantes"}
      </Text>
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
  titulo: {
    fontFamily: typography.family.extrabold,
    fontSize: typography.size.title,
    color: colors.textStrong,
    marginTop: 8,
  },
  meta: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.caption,
    color: colors.text,
    marginTop: 4,
  },
  texto: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.subtitle,
    lineHeight: 24,
    color: colors.textStrong,
    marginTop: 16,
  },
  publico: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.body,
    color: colors.text,
    marginTop: 24,
  },
});
