import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Accueil';
import Games from './pages/Games';
import QuizChoice from './pages/QuizChoice';
import './index.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Quiz from './pages/Quiz';
import Classement from './pages/Classement';
import Amis from './pages/Amis';
import Profile from './pages/Profile';


// On crée un routeur qui spécifie plusieurs routes avec chacune une page (composantes) associé
const route = createBrowserRouter([
  {
    path: "/", // path c'est le chemin
    element: <App />, // element le composant ou page associé
  },
  {
    path: "/games", // path c'est le chemin
    element: <Games />, // element le composant ou page associé
  },
  {
    path: "/profile",
    element: <Profile />, 
  },
  {
    path: "/games/quizchoice", 
    element: <QuizChoice />, 
  },
  {
    path: "/amis", 
    element: <Amis />, 
  },
  {
    path: "/classement", 
    element: <Classement />, 
  },
  {
    path: "/games/quiz", 
    element: <Quiz />, 
  },
  {
    path: "*", // le reste des pages
    element: <h2 className='dark:text-[#83794f] '>La page n'existe pas</h2>,
  }

]);


// racine de notre site web qui permet de pouvoir naviguer avec les routes configurés
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

