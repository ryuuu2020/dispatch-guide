/**
 * Dispatch Theme Configuration
 *
 * Central theme definition for both CSS custom properties and TypeScript usage.
 * Dispatch = superhero workplace comedy → comic book clean, orange/gold accent, light bg preferred.
 */

export interface ThemeColors {
  bg: string;
  surface: string;
  surfaceHover: string;
  text: string;
  muted: string;
  border: string;
}

export interface ThemeConfig {
  name: string;
  colors: {
    light: ThemeColors;
    dark: ThemeColors;
    accent: string;
    accentSecondary: string;
  };
  fonts: {
    heading: string;
    body: string;
    mono: string;
  };
  style: string;
  radius: string;
}

export const dispatchTheme: ThemeConfig = {
  name: "Dispatch",
  colors: {
    light: {
      bg: "#FFF8F0",
      surface: "#FFFFFF",
      surfaceHover: "#FFF0E0",
      text: "#1A1A14",
      muted: "#6B6B63",
      border: "#E5E0D8",
    },
    dark: {
      bg: "#0D0D0D",
      surface: "#1A1A1A",
      surfaceHover: "#242424",
      text: "#F5F5F0",
      muted: "#888880",
      border: "#2A2A2A",
    },
    accent: "#FF4500",
    accentSecondary: "#FFD700",
  },
  fonts: {
    heading: "Bangers",
    body: "Inter",
    mono: "JetBrains Mono",
  },
  style: "comic",
  radius: "lg",
};

/** Get the current theme colors based on mode */
export function getThemeColors(mode: "light" | "dark"): ThemeColors & { accent: string; accentSecondary: string } {
  const base = mode === "dark" ? dispatchTheme.colors.dark : dispatchTheme.colors.light;
  return {
    ...base,
    accent: dispatchTheme.colors.accent,
    accentSecondary: dispatchTheme.colors.accentSecondary,
  };
}

/** CSS custom properties string for inline style injection */
export function themeToCSSVars(mode: "light" | "dark"): Record<string, string> {
  const c = getThemeColors(mode);
  return {
    "--color-bg": c.bg,
    "--color-surface": c.surface,
    "--color-surface-hover": c.surfaceHover,
    "--color-text": c.text,
    "--color-muted": c.muted,
    "--color-border": c.border,
    "--color-accent": c.accent,
    "--color-accent-secondary": c.accentSecondary,
  };
}
