import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import {
  Button,
  Card,
  IconTile,
  PageHeader,
  Screen,
  pageStyles as p,
} from "@/components";
import { deslogar } from "@/services/auth";
import { usuariosMock } from "@/services/mocks/usuarios";
import { colors, typography } from "@/theme";
const usuario = usuariosMock[0];
export default function Perfil() {
  const router = useRouter();
  async function handleSair() {
    try {
      await deslogar();
    } catch {}
    router.replace("/login");
  }
  return (
    <Screen>
      <PageHeader
        eyebrow="Minha conta"
        title="Seu perfil"
        description="As informações que conectam você à comunidade."
      />
      <Card>
        <View style={s.identity}>
          <View style={s.avatar}>
            <Text style={s.initials}>
              {usuario.nome
                .split(" ")
                .filter(Boolean)
                .slice(0, 2)
                .map((n) => n[0])
                .join("")}
            </Text>
          </View>
          <View style={p.grow}>
            <Text style={s.name}>{usuario.nome}</Text>
            <Text style={[p.body, s.email]}>{usuario.email}</Text>
            <View style={s.badge}>
              <Text style={p.label}>{usuario.tipoUsuario.toUpperCase()}</Text>
            </View>
          </View>
        </View>
      </Card>
      <Card>
        <View style={p.row}>
          <IconTile name="school-outline" />
          <View style={p.grow}>
            <Text style={p.title}>Minha vida acadêmica</Text>
            <Text style={p.meta}>Informações de vínculo institucional</Text>
          </View>
        </View>
        <View style={p.divider} />
        {[
          ["Curso", usuario.curso],
          [
            "Semestre",
            usuario.semestre ? usuario.semestre + "º semestre" : undefined,
          ],
          ["Turno", usuario.turno],
          ["Unidade", usuario.unidade],
        ].map(([label, value]) => (
          <View key={label} style={s.field}>
            <Text style={p.meta}>{label}</Text>
            <Text style={s.value}>{value ?? "Não informado"}</Text>
          </View>
        ))}
      </Card>
      <View style={s.exit}>
        <Text style={p.meta}>
          Terminou por aqui? Você pode encerrar sua sessão.
        </Text>
        <Button label="Sair da conta" variant="outline" onPress={handleSair} />
      </View>
    </Screen>
  );
}
const s = StyleSheet.create({
  identity: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    flexWrap: "wrap",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.brandSoft,
    alignItems: "center",
    justifyContent: "center",
  },
  initials: {
    fontFamily: typography.family.extrabold,
    fontSize: 28,
    color: colors.brand,
  },
  name: {
    fontFamily: typography.family.extrabold,
    fontSize: 24,
    color: colors.textStrong,
  },
  email: { marginTop: 6 },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: colors.blueSoft,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 30,
    marginTop: 12,
  },
  field: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.surface,
    gap: 6,
  },
  value: {
    fontFamily: typography.family.semibold,
    fontSize: 15,
    lineHeight: 24,
    color: colors.textStrong,
  },
  exit: { gap: 16, marginTop: 12, alignSelf: "flex-start" },
});
