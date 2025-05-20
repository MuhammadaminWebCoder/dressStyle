import { create } from 'zustand';

interface AppState {
  openFilter: boolean;
  searchValue:string;

  setOpenFilter: (value: boolean) => void;
  setSearchValue:(value:string) => void
}

const useAppStore = create<AppState>((set) => ({
  openFilter: false,
  searchValue:'',
  setOpenFilter: (value) => set({ openFilter: value }),
  setSearchValue: (value) => set({searchValue: value}),
}));

export default useAppStore;
