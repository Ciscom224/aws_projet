import { create } from 'zustand';

const useRemovedMenu = create(set => ({
    isRemoved: false,
    setTrue: () => set({ isRemoved: true }),
    setFalse: () => set({ isRemoved: false })
}));

const useAuthStore = create((set) => ({
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true' || false,
    setIsAuthenticated: (value) => {
      set({ isAuthenticated: value });
      
      localStorage.setItem('isAuthenticated', value ? 'true' : 'false');
    },
  }));

export { useRemovedMenu,useAuthStore };