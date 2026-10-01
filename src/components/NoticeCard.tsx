import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "./Card";
import { BadgeOficial } from "./BadgeOficial";
import { pageStyles as p } from "./Screen";
import { colors, typography } from "@/theme";
import type { Aviso } from "@/types";
export function NoticeCard({
  aviso,
  onPress,
}: {
  aviso: Aviso;
  onPress: () => void;
}) {
  return (
    <Card onPress={onPress} accessibilityLabel={"Ler aviso: " + aviso.titulo}>
      <View style={s.top}>
        {aviso.origem !== "professor" ? (
          <BadgeOficial />
        ) : (
          <Text style={p.label}>PROFESSOR</Text>
        )}
        <Text style={p.meta}>
          {new Date(aviso.dataPublicacao).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "short",
          })}
        </Text>
      </View>
      <Text style={s.title}>{aviso.titulo}</Text>
      <Text style={p.body} numberOfLines={2}>
        {aviso.mensagem}
      </Text>
      <View style={s.bottom}>
        <View style={p.grow}>
          <Text style={p.meta}>{aviso.autor}</Text>
          <Text style={p.label}>{aviso.categoria}</Text>
        </View>
        <Ionicons name="arrow-forward" size={20} color={colors.blue} />
      </View>
    </Card>
  );
}
const s = StyleSheet.create({
  top: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontFamily: typography.family.semibold,
    fontSize: 18,
    lineHeight: 26,
    color: colors.textStrong,
    marginTop: 16,
    marginBottom: 8,
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.surface,
  },
});
