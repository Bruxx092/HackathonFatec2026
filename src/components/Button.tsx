import { Pressable, StyleSheet, Text } from "react-native";
import { colors, radii, typography } from "@/theme";
type Variant = "primary" | "secondary" | "outline";
interface Props {
  label: string;
  onPress?: () => void;
  variant?: Variant;
  disabled?: boolean;
  testID?: string;
}
export function Button({
  label,
  onPress,
  variant = "primary",
  disabled,
  testID,
}: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: !!disabled }}
      testID={testID}
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        s.base,
        s[variant],
        pressed &&
          s[
            variant === "outline"
              ? "outlinePressed"
              : variant === "secondary"
                ? "secondaryPressed"
                : "primaryPressed"
          ],
        disabled && s.disabled,
      ]}
    >
      <Text style={[s.label, variant === "outline" && s.outlineLabel]}>
        {label}
      </Text>
    </Pressable>
  );
}
const s = StyleSheet.create({
  base: {
    minHeight: 52,
    borderRadius: radii.card,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  primary: { backgroundColor: colors.brand },
  secondary: { backgroundColor: colors.blue },
  outline: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
  },
  primaryPressed: { backgroundColor: colors.brandDark },
  secondaryPressed: { backgroundColor: colors.blueDark },
  outlinePressed: {
    backgroundColor: colors.blueSoft,
    borderColor: colors.blue,
  },
  disabled: { opacity: 0.5 },
  label: {
    fontFamily: typography.family.semibold,
    fontSize: 14,
    color: colors.background,
    textAlign: "center",
    lineHeight: 21,
  },
  outlineLabel: { color: colors.blue },
});
