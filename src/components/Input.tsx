import { StyleSheet, Text, TextInput, View, type TextInputProps } from "react-native";

import { colors, radii, typography } from "@/theme";

interface Props {
  label?: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  error?: string;
  secureTextEntry?: boolean;
  keyboardType?: TextInputProps["keyboardType"];
  autoCapitalize?: TextInputProps["autoCapitalize"];
  testID?: string;
}

export function Input({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  testID,
}: Props) {
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        testID={testID}
        style={[styles.input, error ? styles.inputError : null]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontFamily: typography.family.semibold,
    fontSize: typography.size.body,
    color: colors.textStrong,
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderRadius: radii.card,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    fontFamily: typography.family.regular,
    fontSize: typography.size.body,
    color: colors.textStrong,
  },
  inputError: {
    borderColor: colors.feedback.canceled,
  },
  error: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.caption,
    color: colors.feedback.canceled,
    marginTop: 4,
  },
});
