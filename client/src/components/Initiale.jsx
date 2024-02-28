// Cette fonction est celle initiale qu'on appelle dans index.js et permet de Set des parametres dans notre stockage locale
export const initial = () => {
    if (localStorage.getItem('firstTime') === null) {
      localStorage.setItem('firstTime','false')
      localStorage.setItem('isAuthenticated','false')

    }
  }