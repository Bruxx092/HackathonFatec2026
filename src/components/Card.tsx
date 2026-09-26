import type { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { colors, radii, shadows } from "@/theme";

interface Props {
  children: ReactNode;
  testID?: string;
}

export function Card({ children, testID }: Props) {
  return (
    <View testID={testID} style={styles.card}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radii.card,
    padding: 16,
    marginBottom: 12,
    ...shadows.box1,
  },
});
