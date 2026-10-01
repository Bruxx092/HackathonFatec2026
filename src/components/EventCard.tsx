import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "./Card";
import { pageStyles as p } from "./Screen";
import { colors, typography } from "@/theme";
import type { Evento } from "@/types";
export function EventCard({
  evento,
  compact = false,
}: {
  evento: Evento;
  compact?: boolean;
}) {
  const data = new Date(evento.data + "T12:00:00");
  return (
    <Card>
      <View style={s.row}>
        <View style={s.date}>
          <Text style={s.day}>{data.getDate()}</Text>
          <Text style={s.month}>
            {data
              .toLocaleDateString("pt-BR", { month: "short" })
              .replace(".", "")
              .toUpperCase()}
          </Text>
        </View>
        <View style={p.grow}>
          <Text style={p.label}>{evento.categoria.toUpperCase()}</Text>
          <Text style={[p.title, s.title]}>{evento.titulo}</Text>
          {!compact && (
            <Text style={[p.body, s.title]}>{evento.descricao}</Text>
          )}
          <View style={s.metadata}>
            <View style={s.inline}>
              <Ionicons name="time-outline" color={colors.blue} size={14} />
              <Text style={p.meta}>{evento.horario}</Text>
            </View>
            <View style={s.inline}>
              <Ionicons name="location-outline" color={colors.blue} size={14} />
              <Text style={p.meta}>{evento.local}</Text>
            </View>
          </View>
          {!compact && evento.publicoAlvo && (
            <Text style={[p.meta, s.title]}>{evento.publicoAlvo}</Text>
          )}
        </View>
      </View>
    </Card>
  );
}
const s = StyleSheet.create({
  row: { flexDirection: "row", gap: 16, alignItems: "flex-start" },
  date: {
    width: 58,
    paddingVertical: 12,
    borderRadius: 18,
    backgroundColor: colors.blueSoft,
    alignItems: "center",
  },
  day: {
    fontFamily: typography.family.extrabold,
    fontSize: 25,
    color: colors.blue,
  },
  month: {
    fontFamily: typography.family.semibold,
    fontSize: 10,
    letterSpacing: 1,
    color: colors.blue,
    marginTop: 3,
  },
  title: { marginTop: 6 },
  metadata: { flexDirection: "row", flexWrap: "wrap", gap: 12, marginTop: 12 },
  inline: { flexDirection: "row", alignItems: "center", gap: 5 },
});
