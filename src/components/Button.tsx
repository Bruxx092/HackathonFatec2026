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

export function Button({ label, onPress, variant = "primary", disabled, testID }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      testID={testID}
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
      <Text style={[styles.label, variant === "outline" && styles.outlineLabel]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 48,
    borderRadius: radii.pill,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  primary: {
    backgroundColor: colors.brand,
  },
  secondary: {
    backgroundColor: colors.blue,
  },
  outline: {
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.blue,
  },
  pressed: {
    backgroundColor: colors.brandDark,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    color: colors.background,
    fontFamily: typography.family.semibold,
    fontSize: typography.size.subtitle,
  },
  outlineLabel: {
    color: colors.blue,
  },
});
