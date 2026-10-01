export const colors = {
  brand: "#B20000",
  brandSoft: "#FFF1F1",
  blueSoft: "#EDF5F6",
  canvas: "#F4F5F7",
  brandDark: "#7E0000",
  blue: "#005C6D",
  blueDark: "#004854",
  accent: "#00C1CF",
  accentLight: "#00D8E8",
  text: "#666666",
  textStrong: "#000000",
  border: "#DADADA",
  hover: "#E6E6E6",
  surface: "#F8F8F8",
  background: "#FFFFFF",
  feedback: {
    canceled: "#D32719",
    inProgress: "#B78718",
    done: "#3ACF1F",
    canceledLight: "#FDD5D1",
    inProgressLight: "#FFF5EA",
    doneLight: "#E8FBE4",
  },
} as const;

export const typography = {
  family: {
    regular: "Montserrat_400Regular",
    semibold: "Montserrat_600SemiBold",
    extrabold: "Montserrat_800ExtraBold",
  },
  size: {
    caption: 12,
    body: 14,
    subtitle: 16,
    title: 20,
    headline: 28,
    display: 40,
  },
} as const;

export const radii = {
  card: 30,
  pill: 999,
  circular: 9999,
} as const;

export const shadows = {
  box1: {
    shadowColor: "#000000",
    shadowOpacity: 0.04,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },
  box2: {
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
} as const;
