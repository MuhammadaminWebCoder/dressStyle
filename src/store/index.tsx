import { create } from 'zustand';

interface AppState {
  openFilter: boolean;
  setOpenFilter: (value: boolean) => void;
}

const useAppStore = create<AppState>((set) => ({
  openFilter: false,
  setOpenFilter: (value) => set({ openFilter: value }),
}));

export default useAppStore;
