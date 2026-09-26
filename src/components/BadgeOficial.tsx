import { StyleSheet, Text, View } from "react-native";

import { colors, radii, typography } from "@/theme";

export function BadgeOficial() {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>OFICIAL</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    backgroundColor: colors.brand,
    borderRadius: radii.pill,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  text: {
    color: colors.background,
    fontFamily: typography.family.extrabold,
    fontSize: typography.size.caption,
    letterSpacing: 1,
  },
});
