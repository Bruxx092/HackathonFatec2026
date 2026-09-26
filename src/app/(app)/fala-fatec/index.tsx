import { Ionicons } from "@expo/vector-icons";
import { Stack, useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { listarResumos, type ResumoConversa } from "@/services/conversas";
import { colors, radii, typography } from "@/theme";

function formatarHora(iso: string): string {
  const data = new Date(iso);
  const hoje = new Date();
  const mesmoDia = data.toDateString() === hoje.toDateString();
  if (mesmoDia) {
    return data.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  }
  return data.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
}

export default function FalaFatec() {
  const router = useRouter();
  const [resumos, setResumos] = useState<ResumoConversa[]>([]);

  useFocusEffect(
    useCallback(() => {
      listarResumos().then(setResumos);
    }, []),
  );

  const canais = resumos.filter((item) => item.conversa.tipo === "canal");
  const conversasDiretas = resumos.filter((item) => item.conversa.tipo === "dm");

  function renderLinha({ conversa, ultimaMensagem }: ResumoConversa) {
    return (
      <Pressable
        key={conversa.id}
        onPress={() => router.push(`/fala-fatec/${conversa.id}`)}
        style={styles.linha}
      >
        <View style={styles.avatar}>
          <Ionicons
            name={conversa.tipo === "canal" ? "people" : "person"}
            size={18}
            color={colors.background}
          />
        </View>
        <View style={styles.conteudo}>
          <Text style={styles.nome} numberOfLines={1}>
            {conversa.nome}
          </Text>
          <Text style={styles.previa} numberOfLines={1}>
            {ultimaMensagem?.texto ?? "Sem mensagens"}
          </Text>
        </View>
        {ultimaMensagem ? <Text style={styles.hora}>{formatarHora(ultimaMensagem.enviadaEm)}</Text> : null}
      </Pressable>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Nova conversa"
              testID="chat-nova"
              onPress={() => router.push("/fala-fatec/nova")}
              style={styles.novo}
            >
              <Ionicons name="add" size={26} color={colors.brand} />
            </Pressable>
          ),
        }}
      />

      <Text style={styles.secao}>Canais</Text>
      {canais.map(renderLinha)}

      <Text style={styles.secao}>Conversas diretas</Text>
      {conversasDiretas.map(renderLinha)}
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
  novo: {
    marginRight: 12,
    padding: 4,
  },
  secao: {
    fontFamily: typography.family.extrabold,
    fontSize: typography.size.subtitle,
    color: colors.text,
    marginTop: 12,
    marginBottom: 8,
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
  conteudo: {
    flex: 1,
  },
  nome: {
    fontFamily: typography.family.semibold,
    fontSize: typography.size.body,
    color: colors.textStrong,
  },
  previa: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.caption,
    color: colors.text,
    marginTop: 2,
  },
  hora: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.caption,
    color: colors.text,
    marginLeft: 8,
  },
});
