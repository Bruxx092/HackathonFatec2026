import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

import { colors } from "@/theme";
import { AccessibilitySheet } from "./AccessibilitySheet";

export function AccessibilityButton() {
  const [visivel, setVisivel] = useState(false);

  return (
    <>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Acessibilidade"
        testID="acessibilidade"
        onPress={() => setVisivel(true)}
        style={styles.botao}
      >
        <Ionicons name="accessibility" size={22} color={colors.blue} />
      </Pressable>
      <AccessibilitySheet visivel={visivel} aoFechar={() => setVisivel(false)} />
    </>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginRight: 12,
    padding: 4,
  },
});
