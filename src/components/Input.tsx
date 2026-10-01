import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  type TextInputProps,
} from "react-native";

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
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        testID={testID}
        accessibilityLabel={label ?? placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={[
          styles.input,
          focused && styles.focused,
          error ? styles.inputError : null,
        ]}
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
    minHeight: 54,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    paddingHorizontal: 18,
    paddingVertical: 14,
    fontFamily: typography.family.regular,
    fontSize: typography.size.body,
    color: colors.textStrong,
  },
  focused: { borderColor: colors.blue, backgroundColor: colors.blueSoft },
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
