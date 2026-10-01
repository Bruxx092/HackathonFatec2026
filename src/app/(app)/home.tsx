import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import {
  Card,
  EmptyState,
  IconTile,
  PageHeader,
  Screen,
  SectionTitle,
  pageStyles as p,
} from "@/components";
import { EventCard } from "@/components/EventCard";
import { NoticeCard } from "@/components/NoticeCard";
import { listarAvisos } from "@/services/avisos";
import { listarEventos } from "@/services/eventos";
import { usuariosMock } from "@/services/mocks/usuarios";
import { colors, typography } from "@/theme";
import type { Aviso, Evento } from "@/types";
const usuario = usuariosMock[0];
export default function Home() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [avisos, setAvisos] = useState<Aviso[]>([]);
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    let active = true;
    Promise.all([listarAvisos("todos"), listarEventos()])
      .then(([a, e]) => {
        if (active) {
          setAvisos(a);
          setEventos(e);
        }
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
  return (
    <Screen>
      <PageHeader
        eyebrow="Seu espaço acadêmico"
        title={"Olá, " + usuario.nome.split(" ")[0] + "."}
        description="O que acontece na sua Fatec começa aqui."
      />
      <View style={s.hero}>
        <View style={s.heroCopy}>
          <Text style={s.heroLabel}>SUA FATEC. TUDO CONECTADO.</Text>
          <Text style={s.heroTitle}>
            Mais perto do que faz parte da sua jornada.
          </Text>
          <Text style={s.heroText}>{usuario.curso}</Text>
          <View style={s.tag}>
            <Ionicons
              name="school-outline"
              size={15}
              color={colors.background}
            />
            <Text style={s.tagText}>
              {usuario.semestre}º semestre · {usuario.turno}
            </Text>
          </View>
        </View>
        {width >= 600 && (
          <View
            style={s.heroArt}
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
          >
            <View style={s.orbit} />
            <Ionicons
              name="school-outline"
              size={78}
              color={colors.background}
            />
            <View style={s.artDot} />
          </View>
        )}
      </View>
      <View style={p.wrap}>
        {(
          [
            {
              title: "Mural de avisos",
              description: "Comunicados e novidades",
              icon: "notifications-outline",
              route: "/avisos",
            },
            {
              title: "Agenda acadêmica",
              description: "Organize seus compromissos",
              icon: "calendar-outline",
              route: "/agenda",
            },
            {
              title: "Fala Fatec",
              description: "Converse com a comunidade",
              icon: "chatbubbles-outline",
              route: "/fala-fatec",
            },
          ] as const
        ).map((item) => (
          <Card
            key={item.route}
            style={s.shortcut}
            onPress={() => router.push(item.route)}
          >
            <View style={p.row}>
              <IconTile name={item.icon} brand={item.route === "/avisos"} />
              <Ionicons name="arrow-forward" size={18} color={colors.text} />
            </View>
            <Text style={s.shortcutTitle}>{item.title}</Text>
            <Text style={p.meta}>{item.description}</Text>
          </Card>
        ))}
      </View>
      {loading ? (
        <EmptyState title="Atualizando seu painel…" loading />
      ) : error ? (
        <EmptyState
          title="Não foi possível carregar o painel"
          message="Tente abrir os avisos ou a agenda pelo menu."
        />
      ) : (
        <View style={[s.columns, width >= 900 && s.columnsWide]}>
          <View style={s.main}>
            <SectionTitle
              title="No radar"
              action="Todos os avisos"
              onPress={() => router.push("/avisos")}
            />
            {avisos.slice(0, 3).map((aviso) => (
              <NoticeCard
                key={aviso.id}
                aviso={aviso}
                onPress={() => router.push(("/avisos/" + aviso.id) as never)}
              />
            ))}
            {!avisos.length && <EmptyState title="Nenhum aviso por aqui" />}
          </View>
          <View style={[s.side, width >= 900 && s.sideWide]}>
            <SectionTitle
              title="Na sua agenda"
              action="Ver agenda"
              onPress={() => router.push("/agenda")}
            />
            {eventos.slice(0, 3).map((evento) => (
              <EventCard key={evento.id} evento={evento} compact />
            ))}
            {!eventos.length && <EmptyState title="Sem eventos cadastrados" />}
          </View>
        </View>
      )}
    </Screen>
  );
}
const s = StyleSheet.create({
  hero: {
    backgroundColor: colors.blue,
    borderRadius: 30,
    padding: 28,
    marginBottom: 24,
    flexDirection: "row",
    overflow: "hidden",
    gap: 20,
  },
  heroCopy: { flex: 1 },
  heroLabel: {
    fontFamily: typography.family.semibold,
    fontSize: 10,
    letterSpacing: 1.4,
    color: colors.background,
    marginBottom: 16,
  },
  heroTitle: {
    fontFamily: typography.family.extrabold,
    fontSize: 28,
    lineHeight: 37,
    color: colors.background,
    letterSpacing: -0.7,
    maxWidth: 560,
  },
  heroText: {
    fontFamily: typography.family.regular,
    fontSize: 13,
    lineHeight: 22,
    color: colors.background,
    marginTop: 14,
  },
  tag: { flexDirection: "row", alignItems: "center", gap: 8, marginTop: 18 },
  tagText: {
    fontFamily: typography.family.semibold,
    fontSize: 12,
    color: colors.background,
  },
  heroArt: { width: 180, alignItems: "center", justifyContent: "center" },
  orbit: {
    position: "absolute",
    width: 165,
    height: 165,
    borderRadius: 90,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
  },
  artDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.accent,
    position: "absolute",
    right: 10,
    top: 28,
  },
  shortcut: { flexGrow: 1, flexBasis: 240 },
  shortcutTitle: {
    fontFamily: typography.family.semibold,
    fontSize: 16,
    color: colors.textStrong,
    marginTop: 18,
    marginBottom: 6,
  },
  columns: { gap: 12 },
  columnsWide: { flexDirection: "row", gap: 24 },
  main: { flex: 1 },
  side: { width: "100%" },
  sideWide: { width: 350 },
});
