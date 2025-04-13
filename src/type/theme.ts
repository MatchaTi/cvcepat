export type Theme = 'cyberpunk' | 'aqua' | 'forest' | 'synthwave' | 'retro' | 'light' | 'dark';

export interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
