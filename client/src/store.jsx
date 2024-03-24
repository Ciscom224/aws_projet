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

const useQuizStore = create(set => ({
  points: 0,
  theme: "",
  questions : [],
  choices : [],
  answers : [],
  setQuestions: () => set({ questions: ["Qui est le goat ?","Quelle équipe n'est pas qualifié en quart de finale de Champions League ?"] }),
  setChoice: () => set({ choice: [["Lionel Messi","Cristiano Ronaldo","Maradonna","Neymar JR"],["PSG","Barcelone","Real Madrid","Liverpool"]] }),
  setAnswers: () => set({ answers: ["Lionel Messi","PSG"] }),
  setTheme: (newTheme) => set({ theme: newTheme})
}))

export { useRemovedMenu,useAuthStore,useQuizStore };