import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import {
  escalasTexto,
  filtrosDaltonismo,
  useAcessibilidade,
} from "@/services/acessibilidade";
import { colors, radii, shadows, typography } from "@/theme";

interface Props {
  visivel: boolean;
  aoFechar: () => void;
}

export function AccessibilitySheet({ visivel, aoFechar }: Props) {
  const insets = useSafeAreaInsets();
  const { filtro, escalaTexto, definirFiltro, definirEscalaTexto } =
    useAcessibilidade();

  return (
    <Modal
      visible={visivel}
      transparent
      animationType="slide"
      onRequestClose={aoFechar}
    >
      <View style={styles.container}>
        <Pressable
          style={styles.fundo}
          onPress={aoFechar}
          accessibilityLabel="Fechar"
        />
        <View
          accessibilityViewIsModal
          style={[
            styles.painel,
            { paddingBottom: Math.max(24, insets.bottom) },
          ]}
        >
          <View style={styles.alca} />
          <View style={styles.cabecalho}>
            <View style={{ flex: 1 }}>
              <Text accessibilityRole="header" style={styles.titulo}>
                Do seu jeito
              </Text>
              <Text style={styles.descricao}>
                Personalize sua experiência de leitura.
              </Text>
            </View>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Fechar acessibilidade"
              onPress={aoFechar}
              style={styles.fechar}
            >
              <Ionicons name="close" size={22} color={colors.blue} />
            </Pressable>
          </View>
          <ScrollView
            style={styles.rolagem}
            contentContainerStyle={styles.rolagemConteudo}
          >
            <Text style={styles.subtitulo}>Filtro de daltonismo</Text>
            <View style={styles.chips}>
              {filtrosDaltonismo.map((opcao) => (
                <Pressable
                  key={opcao.valor}
                  accessibilityRole="button"
                  accessibilityState={{ selected: filtro === opcao.valor }}
                  onPress={() => definirFiltro(opcao.valor)}
                  style={[
                    styles.chip,
                    filtro === opcao.valor && styles.chipAtivo,
                  ]}
                  testID={`filtro-${opcao.valor}`}
                >
                  <Text
                    style={[
                      styles.chipTexto,
                      filtro === opcao.valor && styles.chipTextoAtivo,
                    ]}
                  >
                    {opcao.rotulo}
                  </Text>
                </Pressable>
              ))}
            </View>

            <Text style={styles.subtitulo}>Tamanho do texto</Text>
            <View style={styles.chips}>
              {escalasTexto.map((opcao) => (
                <Pressable
                  key={opcao.valor}
                  accessibilityRole="button"
                  accessibilityState={{ selected: escalaTexto === opcao.valor }}
                  onPress={() => definirEscalaTexto(opcao.valor)}
                  style={[
                    styles.chip,
                    escalaTexto === opcao.valor && styles.chipAtivo,
                  ]}
                  testID={`texto-${opcao.valor}`}
                >
                  <Text
                    style={[
                      styles.chipTexto,
                      escalaTexto === opcao.valor && styles.chipTextoAtivo,
                    ]}
                  >
                    {opcao.rotulo}
                  </Text>
                </Pressable>
              ))}
            </View>

            <Text style={styles.nota}>
              Os filtros seguem o padrão de acessibilidade do site oficial do
              CPS.
            </Text>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 12,
  },
  fechar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.blueSoft,
    alignItems: "center",
    justifyContent: "center",
  },
  descricao: {
    fontFamily: typography.family.regular,
    fontSize: 13,
    lineHeight: 21,
    color: colors.text,
    marginTop: 8,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  fundo: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  painel: {
    backgroundColor: colors.background,
    borderTopLeftRadius: radii.card,
    borderTopRightRadius: radii.card,
    width: "100%",
    maxWidth: 640,
    alignSelf: "center",
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
    maxHeight: "85%",
    ...shadows.box2,
  },
  alca: {
    alignSelf: "center",
    width: 44,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.border,
    marginBottom: 12,
  },
  titulo: {
    fontFamily: typography.family.extrabold,
    fontSize: typography.size.title,
    color: colors.textStrong,
  },
  rolagem: {
    marginTop: 8,
  },
  rolagemConteudo: {
    paddingBottom: 8,
  },
  subtitulo: {
    fontFamily: typography.family.semibold,
    fontSize: typography.size.body,
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chip: {
    borderRadius: radii.pill,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 14,
    minHeight: 44,
    justifyContent: "center",
    paddingVertical: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  chipAtivo: {
    backgroundColor: colors.brand,
    borderColor: colors.brand,
  },
  chipTexto: {
    fontFamily: typography.family.semibold,
    fontSize: typography.size.caption,
    color: colors.text,
  },
  chipTextoAtivo: {
    color: colors.background,
  },
  nota: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.caption,
    color: colors.text,
    marginTop: 8,
  },
});
