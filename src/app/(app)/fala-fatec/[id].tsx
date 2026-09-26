import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import {
  enviarMensagem,
  listarMensagens,
  obterConversa,
  responderAutomatico,
} from "@/services/conversas";
import { nomesAutores } from "@/services/mocks/conversas";
import { usuariosMock } from "@/services/mocks/usuarios";
import { colors, radii, typography } from "@/theme";
import type { Conversa, Mensagem } from "@/types";

const usuario = usuariosMock[0];

export default function Conversa() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const listaRef = useRef<FlatList<Mensagem>>(null);
  const [conversa, setConversa] = useState<Conversa | undefined>();
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);
  const [texto, setTexto] = useState("");
  const [digitando, setDigitando] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    obterConversa(id).then(setConversa);
    listarMensagens(id).then(setMensagens);
  }, [id]);

  async function handleEnviar() {
    const conteudo = texto.trim();
    if (!id || !conteudo) {
      return;
    }
    setTexto("");
    const enviada = await enviarMensagem(id, usuario.id, conteudo);
    setMensagens((atual) => [...atual, enviada]);
    setDigitando(true);
    const resposta = await responderAutomatico(id);
    setDigitando(false);
    if (resposta) {
      setMensagens((atual) => [...atual, resposta]);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 96 : 0}
    >
      <Stack.Screen options={{ title: conversa?.nome ?? "Conversa" }} />
      <FlatList
        ref={listaRef}
        data={mensagens}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        onContentSizeChange={() => listaRef.current?.scrollToEnd({ animated: true })}
        ListFooterComponent={
          digitando ? <Text style={styles.digitando}>digitando...</Text> : null
        }
        renderItem={({ item }) => {
          const minha = item.autorId === usuario.id;
          return (
            <View style={[styles.linha, minha ? styles.linhaMinha : null]}>
              <View style={[styles.balao, minha ? styles.balaoMeu : styles.balaoDeles]}>
                {minha ? null : (
                  <Text style={styles.autor}>{nomesAutores[item.autorId] ?? item.autorId}</Text>
                )}
                <Text style={[styles.texto, minha ? styles.textoMeu : null]}>{item.texto}</Text>
                <Text style={[styles.hora, minha ? styles.horaMeu : null]}>
                  {new Date(item.enviadaEm).toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <View style={styles.composer}>
        <TextInput
          style={styles.input}
          value={texto}
          onChangeText={setTexto}
          placeholder="Escreva uma mensagem"
          placeholderTextColor={colors.text}
          multiline
          testID="chat-input"
        />
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Enviar"
          testID="chat-enviar"
          onPress={handleEnviar}
          style={styles.enviar}
        >
          <Ionicons name="send" size={20} color={colors.background} />
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: colors.background,
  },
  lista: {
    padding: 16,
  },
  linha: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 12,
  },
  linhaMinha: {
    justifyContent: "flex-end",
  },
  balao: {
    maxWidth: "80%",
    borderRadius: radii.card,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  balaoMeu: {
    backgroundColor: colors.brand,
  },
  balaoDeles: {
    backgroundColor: colors.surface,
  },
  autor: {
    fontFamily: typography.family.semibold,
    fontSize: typography.size.caption,
    color: colors.blue,
    marginBottom: 2,
  },
  texto: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.body,
    color: colors.textStrong,
  },
  textoMeu: {
    color: colors.background,
  },
  hora: {
    fontFamily: typography.family.regular,
    fontSize: 10,
    color: colors.text,
    marginTop: 4,
    alignSelf: "flex-end",
  },
  horaMeu: {
    color: colors.hover,
  },
  digitando: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.caption,
    color: colors.text,
    marginLeft: 4,
    marginBottom: 12,
  },
  composer: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.background,
  },
  input: {
    flex: 1,
    maxHeight: 120,
    borderRadius: radii.card,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontFamily: typography.family.regular,
    fontSize: typography.size.body,
    color: colors.textStrong,
  },
  enviar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.brand,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
});
