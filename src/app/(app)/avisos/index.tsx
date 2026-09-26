import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

import { BadgeOficial, Card } from "@/components";
import { listarAvisos, type AvisoFiltro } from "@/services/avisos";
import { colors, radii, typography } from "@/theme";
import type { Aviso } from "@/types";

const filtros: { chave: AvisoFiltro; label: string }[] = [
  { chave: "todos", label: "Todos" },
  { chave: "meu-curso", label: "Meu curso" },
  { chave: "minha-turma", label: "Minha turma" },
  { chave: "institucional", label: "Institucional" },
];

const contexto = { curso: "Desenvolvimento de Software Multiplataforma", turma: "dsm-3-tarde" };

export default function Avisos() {
  const router = useRouter();
  const [filtro, setFiltro] = useState<AvisoFiltro>("todos");
  const [avisos, setAvisos] = useState<Aviso[]>([]);

  useEffect(() => {
    listarAvisos(filtro, contexto).then(setAvisos);
  }, [filtro]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtros}>
        {filtros.map((item) => (
          <Pressable
            key={item.chave}
            onPress={() => setFiltro(item.chave)}
            style={[styles.chip, filtro === item.chave && styles.chipAtivo]}
          >
            <Text style={[styles.chipLabel, filtro === item.chave && styles.chipLabelAtivo]}>
              {item.label}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {avisos.map((aviso) => (
        <Pressable key={aviso.id} onPress={() => router.push(`/avisos/${aviso.id}`)}>
          <Card>
            {aviso.origem !== "professor" ? <BadgeOficial /> : null}
            <Text style={styles.titulo}>{aviso.titulo}</Text>
            <Text style={styles.texto} numberOfLines={2}>
              {aviso.mensagem}
            </Text>
            <Text style={styles.meta}>
              {aviso.autor} · {aviso.categoria}
            </Text>
          </Card>
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
  filtros: {
    marginBottom: 12,
  },
  chip: {
    borderRadius: radii.pill,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  chipAtivo: {
    backgroundColor: colors.brand,
    borderColor: colors.brand,
  },
  chipLabel: {
    fontFamily: typography.family.semibold,
    fontSize: typography.size.caption,
    color: colors.text,
  },
  chipLabelAtivo: {
    color: colors.background,
  },
  titulo: {
    fontFamily: typography.family.semibold,
    fontSize: typography.size.subtitle,
    color: colors.textStrong,
    marginTop: 8,
  },
  texto: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.body,
    color: colors.text,
    marginTop: 4,
  },
  meta: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.caption,
    color: colors.text,
    marginTop: 8,
  },
});
