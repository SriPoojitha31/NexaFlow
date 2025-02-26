import { create } from "zustand";

const useStore = create((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

export default useStore;
