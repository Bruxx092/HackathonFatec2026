import { StyleSheet, Text, View } from "react-native";

import { colors, radii, typography } from "@/theme";
import type { SolicitacaoStatus } from "@/types";

const config: Record<SolicitacaoStatus, { label: string; background: string; dot: string }> = {
  enviado: { label: "Enviado", background: colors.hover, dot: colors.text },
  recebido: { label: "Recebido", background: colors.hover, dot: colors.blue },
  em_analise: { label: "Em análise", background: colors.feedback.inProgressLight, dot: colors.feedback.inProgress },
  resolvido: { label: "Resolvido", background: colors.feedback.doneLight, dot: colors.feedback.done },
};

interface Props {
  status: SolicitacaoStatus;
}

export function StatusPill({ status }: Props) {
  const item = config[status];
  return (
    <View style={[styles.pill, { backgroundColor: item.background }]}>
      <View style={[styles.dot, { backgroundColor: item.dot }]} />
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: radii.pill,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  label: {
    fontFamily: typography.family.semibold,
    fontSize: typography.size.caption,
    color: colors.textStrong,
  },
});
