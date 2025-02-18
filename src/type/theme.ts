export type Theme = 'light' | 'dark' | 'retro' | 'luxury' | 'pastel' | 'elegant';

export interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
