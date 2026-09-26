import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { colors, typography } from "@/theme";

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.brand,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: { fontFamily: typography.family.semibold, fontSize: 11 },
        headerTitleStyle: { fontFamily: typography.family.extrabold, color: colors.textStrong },
        headerStyle: { backgroundColor: colors.background },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Início",
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />,
        }}
      />

      {/* Rota principal de Avisos */}
      <Tabs.Screen
        name="avisos/index"
        options={{
          title: "Avisos",
          headerTitle: "Avisos",
          tabBarIcon: ({ color, size }) => <Ionicons name="megaphone-outline" color={color} size={size} />,
        }}
      />

      {/* Ocultar a rota de detalhe [id] da barra de abas inferior */}
      <Tabs.Screen
        name="avisos/[id]"
        options={{
          href: null, // Oculta o botão da aba inferior
          title: "Detalhe do Aviso",
        }}
      />

      <Tabs.Screen
        name="agenda/index"
        options={{
          title: "Agenda",
          tabBarIcon: ({ color, size }) => <Ionicons name="calendar-outline" color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="fala-fatec/index"
        options={{
          title: "Fala Fatec",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses-outline" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}