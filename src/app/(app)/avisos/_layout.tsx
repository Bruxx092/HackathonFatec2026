import { Stack } from "expo-router";

import { AccessibilityButton } from "@/components";
import { colors, typography } from "@/theme";

export default function AvisosLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: { fontFamily: typography.family.extrabold, color: colors.textStrong },
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.brand,
        headerRight: () => <AccessibilityButton />,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Avisos" }} />
      <Stack.Screen name="[id]" options={{ title: "Aviso" }} />
    </Stack>
  );
}
