import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ThemeState } from '../type/theme';

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'formal',
      setTheme: (theme) => set({ theme }),
    }),
    { name: 'theme' },
  ),
);
