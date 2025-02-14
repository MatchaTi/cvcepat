export type Theme = 'formal' | 'playful' | 'elegant' | 'brutalist';

export interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
