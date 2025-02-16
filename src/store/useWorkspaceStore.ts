import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { WorkspaceState } from '../type/workspace';

export const useWorkspaceStore = create<WorkspaceState>()(
  persist(
    (set) => ({
      status: 'editor',
      setStatus: (status) => set({ status }),
    }),
    {
      name: 'status',
    },
  ),
);
