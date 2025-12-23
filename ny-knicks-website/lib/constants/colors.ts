/**
 * NY Knicks Brand Colors
 * Official team colors for consistent theming
 */
export const KNICKS_COLORS = {
  blue: "#006BB6",
  orange: "#F58426",
  silver: "#BEC0C2",
  black: "#000000",
} as const;

export type KnicksColor = keyof typeof KNICKS_COLORS;
