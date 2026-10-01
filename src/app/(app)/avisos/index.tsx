import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { EmptyState, PageHeader, Screen } from "@/components";
import { NoticeCard } from "@/components/NoticeCard";
import {
  listarAvisos,
  marcarTodosComoLidos,
  type AvisoFiltro,
} from "@/services/avisos";
import { colors, typography } from "@/theme";
import type { Aviso } from "@/types";
const filtros: { chave: AvisoFiltro; label: string }[] = [
  { chave: "todos", label: "Todos" },
  { chave: "meu-curso", label: "Meu curso" },
  { chave: "minha-turma", label: "Minha turma" },
  { chave: "institucional", label: "Institucional" },
];
const contexto = {
  curso: "Desenvolvimento de Software Multiplataforma",
  turma: "dsm-3-tarde",
};
export default function Avisos() {
  const router = useRouter();
  const [filtro, setFiltro] = useState<AvisoFiltro>("todos");
  const [avisos, setAvisos] = useState<Aviso[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(false);
    listarAvisos(filtro, contexto)
      .then((a) => {
        if (active) setAvisos(a);
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
  }, [filtro]);
  useEffect(() => {
    marcarTodosComoLidos();
  }, []);
  return (
    <Screen>
      <PageHeader
        eyebrow="Comunicação da sua Fatec"
        title="Mural de avisos"
        description="Informações importantes, direto de quem faz parte da sua rotina."
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={s.filters}
        contentContainerStyle={s.gap}
      >
        {filtros.map((item) => (
          <Pressable
            key={item.chave}
            accessibilityRole="button"
            accessibilityState={{ selected: filtro === item.chave }}
            onPress={() => setFiltro(item.chave)}
            style={[s.chip, filtro === item.chave && s.active]}
          >
            <Text style={[s.label, filtro === item.chave && s.selected]}>
              {item.label}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
      {loading ? (
        <EmptyState title="Carregando avisos…" loading />
      ) : error ? (
        <EmptyState
          title="Não foi possível carregar os avisos"
          message="Escolha um filtro para tentar novamente."
        />
      ) : avisos.length ? (
        avisos.map((aviso) => (
          <NoticeCard
            key={aviso.id}
            aviso={aviso}
            onPress={() => router.push(("/avisos/" + aviso.id) as never)}
          />
        ))
      ) : (
        <EmptyState
          title="Tudo em dia por aqui"
          message="Nenhum comunicado disponível neste filtro."
        />
      )}
    </Screen>
  );
}
const s = StyleSheet.create({
  filters: { flexGrow: 0, marginBottom: 24 },
  gap: { gap: 8 },
  chip: {
    backgroundColor: colors.background,
    minHeight: 44,
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.border,
  },
  active: { backgroundColor: colors.blue, borderColor: colors.blue },
  label: {
    fontFamily: typography.family.semibold,
    fontSize: 12,
    color: colors.text,
  },
  selected: { color: colors.background },
});
