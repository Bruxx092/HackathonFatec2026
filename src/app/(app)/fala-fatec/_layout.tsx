import { Stack } from "expo-router";

import { colors, typography } from "@/theme";

export default function FalaFatecLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: { fontFamily: typography.family.extrabold, color: colors.textStrong },
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.brand,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Fala Fatec" }} />
      <Stack.Screen name="[id]" options={{ title: "Conversa" }} />
      <Stack.Screen name="nova" options={{ title: "Nova conversa" }} />
    </Stack>
  );
}
