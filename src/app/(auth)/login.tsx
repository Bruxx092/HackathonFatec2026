import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import {
  AccessibilityButton,
  Button,
  Input,
  IconTile,
  Wordmark,
} from "@/components";
import { rodarSeedsUsuarios } from "@/seeds/seed";
import { entrar } from "@/services/auth";
import { colors, typography } from "@/theme";

export default function Login() {
  const router = useRouter();
  const wide = useWindowDimensions().width >= 900;
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [mensagem, setMensagem] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(false);
  const [carregandoSeed, setCarregandoSeed] = useState(false);

  async function handleEntrar() {
    setErro(null);
    setMensagem(null);
    setCarregando(true);
    try {
      await entrar({ email, senha });
      router.replace("/home");
    } catch (e) {
      setErro(
        e instanceof Error ? e.message : "Não foi possível realizar o login.",
      );
    } finally {
      setCarregando(false);
    }
  }

  async function handleRodarSeed() {
    setErro(null);
    setMensagem(null);
    setCarregandoSeed(true);
    try {
      const resultado = await rodarSeedsUsuarios();
      setMensagem(resultado);
    } catch (e) {
      setErro(
        e instanceof Error
          ? e.message
          : "Erro ao popular usuários de demonstração.",
      );
    } finally {
      setCarregandoSeed(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[styles.shell, wide && styles.shellWide]}>
          <View style={[styles.presentation, wide && styles.presentationWide]}>
            <Wordmark />
            <View style={styles.intro}>
              <Text style={styles.eyebrow}>BEM-VINDO AO FATECON</Text>
              <Text style={[styles.headline, !wide && styles.headlineMobile]}>
                Sua Fatec.{"\n"}Tudo conectado.
              </Text>
              <Text style={styles.description}>
                Menos distância entre você e a sua faculdade. Mais espaço para
                aprender, participar e se conectar.
              </Text>
            </View>
            {wide && (
              <View style={styles.features}>
                <View style={styles.feature}>
                  <IconTile name="megaphone-outline" brand />
                  <View style={styles.featureCopy}>
                    <Text style={styles.featureTitle}>
                      Informação que chega
                    </Text>
                    <Text style={styles.featureText}>
                      Os avisos que importam para sua rotina.
                    </Text>
                  </View>
                </View>
                <View style={styles.feature}>
                  <IconTile name="calendar-outline" />
                  <View style={styles.featureCopy}>
                    <Text style={styles.featureTitle}>
                      Uma jornada organizada
                    </Text>
                    <Text style={styles.featureText}>
                      Datas e compromissos sempre por perto.
                    </Text>
                  </View>
                </View>
                <View style={styles.feature}>
                  <IconTile name="chatbubbles-outline" />
                  <View style={styles.featureCopy}>
                    <Text style={styles.featureTitle}>
                      Comunidade em movimento
                    </Text>
                    <Text style={styles.featureText}>
                      Conexões com quem faz a Fatec acontecer.
                    </Text>
                  </View>
                </View>
              </View>
            )}
            <Text style={styles.institution}>
              FATEC ITAQUERA · PROF. MIGUEL REALE
            </Text>
          </View>
          <View style={styles.formPanel}>
            <View style={styles.formTop}>
              <IconTile name="log-in-outline" brand />
              <AccessibilityButton />
            </View>
            <Text accessibilityRole="header" style={styles.formTitle}>
              Bom ter você aqui.
            </Text>
            <Text style={styles.formSubtitle}>
              Entre com sua conta institucional para continuar.
            </Text>
            <View style={styles.form}>
              <Input
                label="E-mail institucional"
                value={email}
                onChangeText={setEmail}
                placeholder="seu.nome@fatec.sp.gov.br"
                keyboardType="email-address"
                autoCapitalize="none"
                testID="login-email"
              />
              <Input
                label="Senha"
                value={senha}
                onChangeText={setSenha}
                placeholder="Digite sua senha"
                secureTextEntry
                testID="login-senha"
              />
              {erro ? (
                <Text accessibilityRole="alert" style={styles.erro}>
                  {erro}
                </Text>
              ) : null}
              {mensagem ? (
                <Text accessibilityLiveRegion="polite" style={styles.mensagem}>
                  {mensagem}
                </Text>
              ) : null}
              <Button
                label={carregando ? "Entrando..." : "Entrar na minha Fatec"}
                onPress={handleEntrar}
                disabled={carregando}
                testID="login-entrar"
              />
              {__DEV__ ? (
                <View style={styles.seed}>
                  <Button
                    label={
                      carregandoSeed
                        ? "Populando..."
                        : "Popular usuários de demonstração"
                    }
                    variant="outline"
                    onPress={handleRodarSeed}
                    disabled={carregandoSeed}
                    testID="login-seed"
                  />
                </View>
              ) : null}
            </View>
            <View style={styles.secure}>
              <Ionicons
                name="lock-closed-outline"
                size={15}
                color={colors.blue}
              />
              <Text style={styles.secureText}>
                Acesso com e-mail @fatec.sp.gov.br
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.footer}>FatecON · Hackathon Fatec 2026</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.canvas },
  container: {
    flexGrow: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  shell: {
    width: "100%",
    maxWidth: 1120,
    backgroundColor: colors.background,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },
  shellWide: { flexDirection: "row" },
  presentation: {
    padding: 28,
    backgroundColor: colors.surface,
    borderTopWidth: 5,
    borderTopColor: colors.brand,
  },
  presentationWide: { flex: 1, padding: 44 },
  intro: { marginTop: 32 },
  eyebrow: {
    fontFamily: typography.family.semibold,
    fontSize: 10,
    letterSpacing: 2,
    color: colors.blue,
  },
  headline: {
    fontFamily: typography.family.extrabold,
    fontSize: 44,
    lineHeight: 53,
    color: colors.textStrong,
    letterSpacing: -1.8,
    marginTop: 16,
  },
  headlineMobile: { fontSize: 30, lineHeight: 39, letterSpacing: -1 },
  description: {
    fontFamily: typography.family.regular,
    fontSize: 14,
    lineHeight: 24,
    color: colors.text,
    marginTop: 16,
    maxWidth: 390,
  },
  features: { gap: 24, marginTop: 36 },
  feature: { flexDirection: "row", gap: 16, alignItems: "center" },
  featureCopy: { flex: 1 },
  featureTitle: {
    fontFamily: typography.family.semibold,
    fontSize: 14,
    color: colors.textStrong,
  },
  featureText: {
    fontFamily: typography.family.regular,
    fontSize: 12,
    lineHeight: 20,
    color: colors.text,
    marginTop: 4,
  },
  institution: {
    fontFamily: typography.family.semibold,
    fontSize: 9,
    letterSpacing: 1,
    color: colors.text,
    marginTop: 36,
  },
  formPanel: { flex: 1, padding: 28, justifyContent: "center" },
  formTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  formTitle: {
    fontFamily: typography.family.extrabold,
    fontSize: 27,
    lineHeight: 36,
    color: colors.textStrong,
    letterSpacing: -0.8,
  },
  formSubtitle: {
    fontFamily: typography.family.regular,
    fontSize: 14,
    lineHeight: 23,
    color: colors.text,
    marginTop: 8,
  },
  form: { marginTop: 28 },
  erro: {
    fontFamily: typography.family.regular,
    fontSize: 13,
    lineHeight: 21,
    color: colors.feedback.canceled,
    backgroundColor: colors.brandSoft,
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  mensagem: {
    fontFamily: typography.family.regular,
    fontSize: 13,
    lineHeight: 21,
    color: colors.blue,
    marginBottom: 16,
  },
  seed: { marginTop: 16 },
  secure: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "center",
    marginTop: 24,
    flexWrap: "wrap",
  },
  secureText: {
    fontFamily: typography.family.regular,
    fontSize: 11,
    color: colors.text,
  },
  footer: {
    fontFamily: typography.family.regular,
    fontSize: 11,
    color: colors.text,
    marginTop: 24,
  },
});
