import type { ReactNode } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { colors, radii, shadows } from "@/theme";
interface Props {
  children: ReactNode;
  testID?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  accessibilityLabel?: string;
}
export function Card({
  children,
  testID,
  style,
  onPress,
  accessibilityLabel,
}: Props) {
  if (onPress)
    return (
      <Pressable
        testID={testID}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        onPress={onPress}
        style={({ pressed }) => [s.card, style, pressed && s.pressed]}
      >
        {children}
      </Pressable>
    );
  return (
    <View testID={testID} style={[s.card, style]}>
      {children}
    </View>
  );
}
const s = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderRadius: radii.card,
    padding: 24,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.box1,
  },
  pressed: { backgroundColor: colors.surface, borderColor: colors.blue },
});
