import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";

import { Button, Input } from "@/components";
import { entrar, isEmailInstitucional } from "@/services/auth";
import { colors, typography } from "@/theme";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(false);

  async function handleEntrar() {
    setErro(null);
    if (!isEmailInstitucional(email)) {
      setErro("Use seu e-mail institucional @fatec.sp.gov.br.");
      return;
    }
    setCarregando(true);
    try {
      await entrar(email, senha);
      router.replace("/home");
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Não foi possível entrar.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.wordmark}>
          Fatec<Text style={styles.wordmarkHighlight}>ON</Text>
        </Text>
        <Text style={styles.slogan}>Sua Fatec. Tudo conectado.</Text>

        <View style={styles.form}>
          <Input
            label="E-mail institucional"
            value={email}
            onChangeText={setEmail}
            placeholder="nome.sobrenome@fatec.sp.gov.br"
            keyboardType="email-address"
            autoCapitalize="none"
            testID="login-email"
          />
          <Input
            label="Senha"
            value={senha}
            onChangeText={setSenha}
            placeholder="Sua senha"
            secureTextEntry
            testID="login-senha"
          />
          {erro ? <Text style={styles.erro}>{erro}</Text> : null}
          <Button
            label={carregando ? "Entrando..." : "Entrar"}
            onPress={handleEntrar}
            disabled={carregando}
            testID="login-entrar"
          />
        </View>

        <Text style={styles.rodape}>Hackathon Fatec 2026 · Itaquera</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
  },
  wordmark: {
    fontFamily: typography.family.extrabold,
    fontSize: typography.size.display,
    color: colors.textStrong,
    textAlign: "center",
  },
  wordmarkHighlight: {
    color: colors.brand,
  },
  slogan: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.subtitle,
    color: colors.text,
    textAlign: "center",
    marginTop: 8,
  },
  form: {
    marginTop: 40,
  },
  erro: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.body,
    color: colors.feedback.canceled,
    marginBottom: 12,
  },
  rodape: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.caption,
    color: colors.text,
    textAlign: "center",
    marginTop: 40,
  },
});
