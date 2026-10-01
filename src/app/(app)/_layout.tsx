import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import { AccessibilityButton, NotificationBell, Wordmark } from "@/components";
import { colors, typography } from "@/theme";
export default function AppLayout() {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.brand,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: {
          fontFamily: typography.family.semibold,
          fontSize: 10,
          lineHeight: 16,
          flexShrink: 0,
        },
        tabBarStyle: {
          height: 76 + insets.bottom,
          backgroundColor: colors.background,
          borderTopColor: colors.border,
          paddingTop: 8,
          paddingBottom: Math.max(8, insets.bottom),
        },
        tabBarItemStyle: { paddingVertical: 0 },
        headerTitleStyle: {
          fontFamily: typography.family.extrabold,
          color: colors.textStrong,
          fontSize: 18,
        },
        headerStyle: { backgroundColor: colors.background },
        headerShadowVisible: false,
        headerRight: () => <AccessibilityButton />,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Início",
          headerTitle: () => <Wordmark />,
          headerRight: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <NotificationBell />
              <AccessibilityButton />
            </View>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="avisos"
        options={{
          title: "Avisos",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "notifications" : "notifications-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="agenda/index"
        options={{
          title: "Agenda",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "calendar" : "calendar-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="fala-fatec"
        options={{
          title: "Fala Fatec",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "chatbubbles" : "chatbubbles-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
