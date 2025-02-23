import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FirstTimeState {
  isNotFirstTime: boolean;
  setIsNotFirstTime: () => void;
}

export const useFirstTimeStore = create<FirstTimeState>()(
  persist(
    (set) => ({
      isNotFirstTime: false,
      setIsNotFirstTime: () => {
        set({ isNotFirstTime: true });
      },
    }),
    {
      name: 'firstTimeStore',
    },
  ),
);
