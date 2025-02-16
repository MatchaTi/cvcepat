export type WorkspaceStatus = 'editor' | 'preview';

export interface WorkspaceState {
  status: WorkspaceStatus;
  setStatus: (status: WorkspaceStatus) => void;
}
