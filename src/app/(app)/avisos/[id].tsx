import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  BadgeOficial,
  Card,
  EmptyState,
  IconTile,
  Screen,
  pageStyles as p,
} from "@/components";
import { obterAviso } from "@/services/avisos";
import { colors, typography } from "@/theme";
import type { Aviso } from "@/types";
export default function DetalheAviso() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [aviso, setAviso] = useState<Aviso>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(false);
    setAviso(undefined);
    if (!id) {
      setLoading(false);
      return;
    }
    obterAviso(id)
      .then((a) => {
        if (active) setAviso(a);
      })
      .catch(() => {
        if (active) setError(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [id]);
  if (loading)
    return (
      <Screen>
        <EmptyState title="Carregando aviso…" loading />
      </Screen>
    );
  if (!aviso)
    return (
      <Screen>
        <EmptyState
          title={
            error ? "Não foi possível abrir o aviso" : "Aviso não encontrado"
          }
          message="Volte ao mural e selecione outro comunicado."
        />
      </Screen>
    );
  return (
    <Screen style={s.content}>
      <Card>
        <View style={s.top}>
          {aviso.origem !== "professor" && <BadgeOficial />}
          <Text style={p.label}>{aviso.categoria.toUpperCase()}</Text>
        </View>
        <Text accessibilityRole="header" style={s.title}>
          {aviso.titulo}
        </Text>
        <View style={[p.row, s.author]}>
          <IconTile name="person-outline" />
          <View style={p.grow}>
            <Text style={p.title}>{aviso.autor}</Text>
            <Text style={p.meta}>
              {new Date(aviso.dataPublicacao).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </Text>
          </View>
        </View>
        <View style={p.divider} />
        <Text selectable style={s.body}>
          {aviso.mensagem}
        </Text>
        <View style={s.audience}>
          <Text style={p.label}>PARA QUEM É ESTE AVISO</Text>
          <Text style={p.body}>
            {aviso.turma ?? aviso.curso ?? "Todos os estudantes"}
          </Text>
        </View>
      </Card>
    </Screen>
  );
}
const s = StyleSheet.create({
  content: { maxWidth: 880 },
  top: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 12,
  },
  title: {
    fontFamily: typography.family.extrabold,
    fontSize: 28,
    lineHeight: 38,
    color: colors.textStrong,
    marginTop: 24,
    letterSpacing: -0.5,
  },
  author: { marginTop: 24 },
  body: {
    fontFamily: typography.family.regular,
    fontSize: 16,
    lineHeight: 29,
    color: colors.textStrong,
  },
  audience: {
    marginTop: 32,
    padding: 20,
    backgroundColor: colors.blueSoft,
    borderRadius: 20,
    gap: 8,
  },
});
