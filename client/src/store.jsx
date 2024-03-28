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
  setQuestions: () => set({ questions: ["Qui est le goat ?","Quelle équipe n'est pas qualifié en quart de finale de Champions League ?","Qui est le goat ?","Quelle équipe n'est pas qualifié en quart de finale de Champions League ?","Qui est le goat ?"] }),
  setChoice: () => set({ choices: [["Lionel Messi","Cristiano Ronaldo","Maradonna","Neymar JR"],["PSG","Barcelone","Real Madrid","Liverpool"],["Lionel Messi","Cristiano Ronaldo","Maradonna","Neymar JR"],["PSG","Barcelone","Real Madrid","Liverpool"],["Lionel Messi","Cristiano Ronaldo","Maradonna","Neymar JR"]] }),
  setAnswers: () => set({ answers: [["Lionel Messi","Cristiano Ronaldo"],["Liverpool"],["Lionel Messi","Cristiano Ronaldo"],["Liverpool"],["Lionel Messi","Cristiano Ronaldo"]] }),
  setTheme: (newTheme) => set({ theme: newTheme}),
  setPoints : (newPoints) => set(state => ({ points: state.points + newPoints })),
  resetPoints : () => set({ points: 0 })
}))

export { useRemovedMenu,useAuthStore,useQuizStore };