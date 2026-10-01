import type { ComponentProps, ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { colors, typography } from "@/theme";

type IconName = ComponentProps<typeof Ionicons>["name"];
export function Screen({
  children,
  style,
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <ScrollView
      style={s.screen}
      contentContainerStyle={[s.content, style]}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  );
}
export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <View style={s.heading}>
      <View style={s.headingText}>
        <View style={s.eyebrowRow}>
          <View style={s.dot} />
          <Text style={s.eyebrow}>{eyebrow.toUpperCase()}</Text>
        </View>
        <Text accessibilityRole="header" style={s.title}>
          {title}
        </Text>
        {description && <Text style={s.description}>{description}</Text>}
      </View>
      {action}
    </View>
  );
}
export function SectionTitle({
  title,
  action,
  onPress,
}: {
  title: string;
  action?: string;
  onPress?: () => void;
}) {
  return (
    <View style={s.section}>
      <Text accessibilityRole="header" style={s.sectionTitle}>
        {title}
      </Text>
      {action && (
        <Pressable
          accessibilityRole="button"
          onPress={onPress}
          style={s.sectionAction}
        >
          <Text style={s.link}>{action}</Text>
          <Ionicons name="arrow-forward" size={16} color={colors.blue} />
        </Pressable>
      )}
    </View>
  );
}
export function EmptyState({
  title,
  message,
  loading = false,
}: {
  title: string;
  message?: string;
  loading?: boolean;
}) {
  return (
    <View style={s.empty}>
      {loading ? (
        <ActivityIndicator color={colors.brand} />
      ) : (
        <Ionicons name="file-tray-outline" size={30} color={colors.blue} />
      )}
      <Text style={s.emptyTitle}>{title}</Text>
      {message && <Text style={s.description}>{message}</Text>}
    </View>
  );
}
export function IconTile({
  name,
  brand = false,
}: {
  name: IconName;
  brand?: boolean;
}) {
  return (
    <View style={[s.iconTile, brand && s.iconBrand]}>
      <Ionicons
        name={name}
        size={23}
        color={brand ? colors.brand : colors.blue}
      />
    </View>
  );
}
export function Wordmark() {
  return (
    <Text style={s.wordmark}>
      Fatec<Text style={s.on}>ON</Text>
    </Text>
  );
}
export const pageStyles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 12 },
  wrap: { flexDirection: "row", flexWrap: "wrap", gap: 16 },
  grow: { flex: 1, minWidth: 0 },
  title: {
    fontFamily: typography.family.semibold,
    fontSize: 17,
    lineHeight: 25,
    color: colors.textStrong,
  },
  body: {
    fontFamily: typography.family.regular,
    fontSize: 14,
    lineHeight: 23,
    color: colors.text,
  },
  meta: {
    fontFamily: typography.family.regular,
    fontSize: 12,
    lineHeight: 20,
    color: colors.text,
  },
  label: {
    fontFamily: typography.family.semibold,
    fontSize: 11,
    letterSpacing: 1,
    color: colors.blue,
  },
  divider: { height: 1, backgroundColor: colors.border, marginVertical: 20 },
});
const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.canvas },
  content: {
    width: "100%",
    maxWidth: 1160,
    alignSelf: "center",
    padding: 24,
    paddingBottom: 48,
    flexGrow: 1,
  },
  heading: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  headingText: { flex: 1, minWidth: 210 },
  eyebrowRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.brand },
  eyebrow: {
    fontFamily: typography.family.semibold,
    fontSize: 10,
    letterSpacing: 1.7,
    color: colors.text,
  },
  title: {
    fontFamily: typography.family.extrabold,
    fontSize: 30,
    lineHeight: 39,
    color: colors.textStrong,
    letterSpacing: -1,
  },
  description: {
    fontFamily: typography.family.regular,
    fontSize: 14,
    lineHeight: 23,
    color: colors.text,
    marginTop: 8,
  },
  section: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 12,
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: typography.family.extrabold,
    fontSize: 18,
    color: colors.textStrong,
  },
  sectionAction: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    minHeight: 44,
  },
  link: {
    fontFamily: typography.family.semibold,
    fontSize: 12,
    color: colors.blue,
  },
  empty: {
    padding: 32,
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: "dashed",
    borderRadius: 30,
    alignItems: "center",
    gap: 12,
    marginVertical: 12,
  },
  emptyTitle: {
    fontFamily: typography.family.semibold,
    fontSize: 16,
    color: colors.textStrong,
  },
  iconTile: {
    width: 50,
    height: 50,
    borderRadius: 17,
    backgroundColor: colors.blueSoft,
    alignItems: "center",
    justifyContent: "center",
  },
  iconBrand: { backgroundColor: colors.brandSoft },
  wordmark: {
    fontFamily: typography.family.extrabold,
    fontSize: 25,
    color: colors.textStrong,
    letterSpacing: -1,
  },
  on: { color: colors.brand },
});
