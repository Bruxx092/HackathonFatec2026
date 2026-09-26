import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { obterConversaComPessoa } from "@/services/conversas";
import { usuariosMock } from "@/services/mocks/usuarios";
import { colors, radii, typography } from "@/theme";

const usuario = usuariosMock[0];
const pessoas = usuariosMock.filter((pessoa) => pessoa.id !== usuario.id);

export default function NovaConversa() {
  const router = useRouter();

  async function abrir(pessoaId: string) {
    const conversa = await obterConversaComPessoa(pessoaId, usuario.id);
    if (conversa) {
      router.replace(`/fala-fatec/${conversa.id}`);
    }
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.secao}>Escolha uma pessoa</Text>
      {pessoas.map((pessoa) => (
        <Pressable key={pessoa.id} onPress={() => abrir(pessoa.id)} style={styles.linha}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={18} color={colors.background} />
          </View>
          <View>
            <Text style={styles.nome}>{pessoa.nome}</Text>
            <Text style={styles.email}>{pessoa.email}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },
  secao: {
    fontFamily: typography.family.extrabold,
    fontSize: typography.size.subtitle,
    color: colors.text,
    marginBottom: 12,
  },
  linha: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: radii.card,
    padding: 12,
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  nome: {
    fontFamily: typography.family.semibold,
    fontSize: typography.size.body,
    color: colors.textStrong,
  },
  email: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.caption,
    color: colors.text,
    marginTop: 2,
  },
});
