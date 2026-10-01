import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { contarNaoLidos } from "@/services/avisos";
import { usuariosMock } from "@/services/mocks/usuarios";
import { colors, typography } from "@/theme";

const usuario = usuariosMock[0];

export function NotificationBell() {
  const router = useRouter();
  const [naoLidos, setNaoLidos] = useState(0);

  useFocusEffect(
    useCallback(() => {
      contarNaoLidos({ curso: usuario.curso, turma: "dsm-3-tarde" }).then(
        setNaoLidos,
      );
    }, []),
  );

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Avisos"
      testID="home-sino-avisos"
      onPress={() => router.push("/avisos")}
      style={styles.container}
    >
      <Ionicons name="notifications-outline" size={24} color={colors.brand} />
      {naoLidos > 0 ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{naoLidos}</Text>
        </View>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 12,
    padding: 10,
    minWidth: 44,
    minHeight: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface,
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.brand,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  badgeText: {
    color: colors.background,
    fontFamily: typography.family.extrabold,
    fontSize: 10,
  },
});
