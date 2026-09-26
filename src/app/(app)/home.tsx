import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

import { BadgeOficial, Card } from "@/components";
import { listarAvisos } from "@/services/avisos";
import { listarEventos } from "@/services/eventos";
import { usuariosMock } from "@/services/mocks/usuarios";
import { colors, typography } from "@/theme";
import type { Aviso, Evento } from "@/types";

const usuario = usuariosMock[0];

export default function Home() {
  const [avisos, setAvisos] = useState<Aviso[]>([]);
  const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    listarAvisos("todos").then(setAvisos);
    listarEventos().then(setEventos);
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.saudacao}>Olá, {usuario.nome.split(" ")[0]}</Text>
      <Text style={styles.curso}>
        {usuario.curso} · {usuario.semestre}º semestre · {usuario.turno}
      </Text>

      <Text style={styles.secao}>Avisos recentes</Text>
      {avisos.slice(0, 3).map((aviso) => (
        <Card key={aviso.id}>
          {aviso.origem !== "professor" ? <BadgeOficial /> : null}
          <Text style={styles.titulo}>{aviso.titulo}</Text>
          <Text style={styles.texto} numberOfLines={2}>
            {aviso.mensagem}
          </Text>
          <Text style={styles.meta}>{aviso.autor}</Text>
        </Card>
      ))}

      <Text style={styles.secao}>Próximos eventos</Text>
      {eventos.map((evento) => (
        <Card key={evento.id}>
          <Text style={styles.titulo}>{evento.titulo}</Text>
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
  saudacao: {
    fontFamily: typography.family.extrabold,
    fontSize: typography.size.headline,
    color: colors.textStrong,
  },
  curso: {
    fontFamily: typography.family.regular,
    fontSize: typography.size.body,
    color: colors.text,
    marginTop: 4,
  },
  secao: {
    fontFamily: typography.family.extrabold,
    fontSize: typography.size.title,
    color: colors.textStrong,
    marginTop: 24,
    marginBottom: 12,
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
