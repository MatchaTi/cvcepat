import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { LayoutState } from '../type/layout';

export const useLayoutStore = create<LayoutState>()(
  persist(
    (set) => ({
      layout: 'layout 1',
      setLayout: (layout) => set({ layout }),
    }),
    { name: 'layout' },
  ),
);
