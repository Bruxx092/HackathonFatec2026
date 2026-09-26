import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";

import { Button, Card } from "@/components";
import { usuariosMock } from "@/services/mocks/usuarios";
import { colors, typography } from "@/theme";

const usuario = usuariosMock[0];

export default function Perfil() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.nome}>{usuario.nome}</Text>
      <Text style={styles.email}>{usuario.email}</Text>

      <Card>
        <Text style={styles.rotulo}>Curso</Text>
        <Text style={styles.valor}>{usuario.curso}</Text>
        <Text style={styles.rotulo}>Semestre</Text>
        <Text style={styles.valor}>{usuario.semestre}º semestre</Text>
        <Text style={styles.rotulo}>Turno</Text>
        <Text style={styles.valor}>{usuario.turno}</Text>
        <Text style={styles.rotulo}>Unidade</Text>
        <Text style={styles.valor}>{usuario.unidade}</Text>
      </Card>

      <Button label="Sair" variant="outline" onPress={() => router.replace("/login")} />
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
  nome: {
    fontFamily: typography.family.extrabold,
    fontSize: typography.size.headline,
    color: colors.textStrong,
  },
  email: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.body,
    color: colors.text,
    marginTop: 4,
    marginBottom: 16,
  },
  rotulo: {
    fontFamily: typography.family.semibold,
    fontSize: typography.size.caption,
    color: colors.text,
    marginTop: 8,
  },
  valor: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.body,
    color: colors.textStrong,
  },
});
