import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

import { Card } from "@/components";
import { listarEventos } from "@/services/eventos";
import { colors, typography } from "@/theme";
import type { Evento } from "@/types";

export default function Agenda() {
  const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    listarEventos().then(setEventos);
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {eventos.map((evento) => (
        <Card key={evento.id}>
          <Text style={styles.categoria}>{evento.categoria}</Text>
          <Text style={styles.titulo}>{evento.titulo}</Text>
          <Text style={styles.texto}>{evento.descricao}</Text>
          <Text style={styles.meta}>
            {evento.data} · {evento.horario} · {evento.local}
          </Text>
        </Card>
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
  categoria: {
    fontFamily: typography.family.semibold,
    fontSize: typography.size.caption,
    color: colors.blue,
  },
  titulo: {
    fontFamily: typography.family.semibold,
    fontSize: typography.size.subtitle,
    color: colors.textStrong,
    marginTop: 4,
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
