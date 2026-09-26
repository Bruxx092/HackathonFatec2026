import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import { colors, typography } from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={colors.brand} />
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.wordmark}>
        Fatec<Text style={styles.wordmarkHighlight}>ON</Text>
      </Text>
      <Text style={styles.slogan}>Sua Fatec. Tudo conectado.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  wordmark: {
    fontFamily: typography.family.extrabold,
    fontSize: typography.size.display,
    color: colors.textStrong,
  },
  wordmarkHighlight: {
    color: colors.brand,
  },
  slogan: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.subtitle,
    color: colors.text,
    marginTop: 8,
  },
});
