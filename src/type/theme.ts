export type Theme = 'light' | 'dark' | 'retro' | 'luxury' | 'pastel';

export interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
