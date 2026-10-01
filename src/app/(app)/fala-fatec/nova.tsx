import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Card,
  EmptyState,
  Input,
  PageHeader,
  Screen,
  pageStyles as p,
} from "@/components";
import { obterConversaComPessoa } from "@/services/conversas";
import { usuariosMock } from "@/services/mocks/usuarios";
import { colors, typography } from "@/theme";
const usuario = usuariosMock[0];
const pessoas = usuariosMock.filter((p) => p.id !== usuario.id);
export default function NovaConversa() {
  const router = useRouter();
  const [busca, setBusca] = useState("");
  const [abrindo, setAbrindo] = useState<string | null>(null);
  const [erro, setErro] = useState("");
  async function abrir(id: string) {
    if (abrindo) return;
    setAbrindo(id);
    setErro("");
    try {
      const conversa = await obterConversaComPessoa(id, usuario.id);
      if (conversa) router.replace(("/fala-fatec/" + conversa.id) as never);
      else setErro("Não foi possível abrir esta conversa.");
    } catch {
      setErro("Não foi possível abrir a conversa. Tente novamente.");
    } finally {
      setAbrindo(null);
    }
  }
  const visiveis = pessoas.filter((p) =>
    (p.nome + " " + p.email)
      .toLocaleLowerCase()
      .includes(busca.toLocaleLowerCase().trim()),
  );
  return (
    <Screen>
      <PageHeader
        eyebrow="Novas conexões"
        title="Vamos conversar?"
        description="Encontre uma pessoa da comunidade e comece uma conversa."
      />
      <Input
        value={busca}
        onChangeText={setBusca}
        label="Buscar na comunidade"
        placeholder="Nome ou e-mail"
        autoCapitalize="none"
      />
      {erro && (
        <Text accessibilityRole="alert" style={s.error}>
          {erro}
        </Text>
      )}
      {visiveis.map((pessoa) => (
        <Card
          key={pessoa.id}
          onPress={() => abrir(pessoa.id)}
          accessibilityLabel={"Conversar com " + pessoa.nome}
        >
          <View style={p.row}>
            <View style={s.avatar}>
              <Text style={s.initial}>
                {pessoa.nome.replace(/^(Prof\.|Coord\.)\s*/, "")[0]}
              </Text>
            </View>
            <View style={p.grow}>
              <Text style={p.title}>{pessoa.nome}</Text>
              <Text style={p.meta}>{pessoa.email}</Text>
              <Text style={s.role}>
                {abrindo === pessoa.id
                  ? "Abrindo conversa…"
                  : pessoa.tipoUsuario}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={colors.blue} />
          </View>
        </Card>
      ))}
      {!visiveis.length && (
        <EmptyState
          title="Nenhuma pessoa encontrada"
          message="Tente outro nome ou e-mail."
        />
      )}
    </Screen>
  );
}
const s = StyleSheet.create({
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.blueSoft,
    alignItems: "center",
    justifyContent: "center",
  },
  initial: {
    fontFamily: typography.family.extrabold,
    fontSize: 20,
    color: colors.blue,
  },
  role: {
    fontFamily: typography.family.semibold,
    fontSize: 11,
    color: colors.blue,
    marginTop: 6,
  },
  error: {
    fontFamily: typography.family.regular,
    fontSize: 14,
    color: colors.feedback.canceled,
    marginBottom: 16,
  },
});
