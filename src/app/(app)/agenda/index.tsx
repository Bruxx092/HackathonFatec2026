import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { EmptyState, PageHeader, Screen } from "@/components";
import { EventCard } from "@/components/EventCard";
import { listarEventos } from "@/services/eventos";
import { colors, typography } from "@/theme";
import type { Evento } from "@/types";
export default function Agenda() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [filtro, setFiltro] = useState("Todos");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    let active = true;
    listarEventos()
      .then((e) => {
        if (active) setEventos(e);
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
  }, []);
  const categorias = ["Todos", ...new Set(eventos.map((e) => e.categoria))];
  const visiveis = eventos
    .filter((e) => filtro === "Todos" || e.categoria === filtro)
    .sort((a, b) => a.data.localeCompare(b.data));
  return (
    <Screen>
      <PageHeader
        eyebrow="Planeje sua jornada"
        title="Agenda acadêmica"
        description="Provas, entregas e encontros. Seus compromissos em um só lugar."
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={s.filters}
        contentContainerStyle={s.filtersContent}
      >
        {categorias.map((c) => (
          <Pressable
            key={c}
            accessibilityRole="button"
            accessibilityState={{ selected: filtro === c }}
            onPress={() => setFiltro(c)}
            style={[s.chip, filtro === c && s.active]}
          >
            <Text style={[s.chipText, filtro === c && s.activeText]}>{c}</Text>
          </Pressable>
        ))}
      </ScrollView>
      {loading ? (
        <EmptyState title="Carregando agenda…" loading />
      ) : error ? (
        <EmptyState
          title="Agenda indisponível"
          message="Tente novamente em alguns instantes."
        />
      ) : visiveis.length ? (
        visiveis.map((e) => <EventCard key={e.id} evento={e} />)
      ) : (
        <EmptyState
          title="Nenhum evento nesta categoria"
          message="Escolha outra categoria para explorar a agenda."
        />
      )}
    </Screen>
  );
}
const s = StyleSheet.create({
  filters: { flexGrow: 0, marginBottom: 24 },
  filtersContent: { gap: 8 },
  chip: {
    minHeight: 44,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 30,
    backgroundColor: colors.background,
  },
  active: { backgroundColor: colors.blue, borderColor: colors.blue },
  chipText: {
    fontFamily: typography.family.semibold,
    fontSize: 12,
    color: colors.text,
  },
  activeText: { color: colors.background },
});
