import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import './index.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Login from './pages/Login';
import Inscription  from './pages/Inscription';
import EmailConfirmation  from './pages/EmailConfirmation';
import { initial } from './components/Initiale';


// On crée un routeur qui spécifie plusieurs routes avec chacune une page (composantes) associé
const route = createBrowserRouter([
  {
    path: "/", // path c'est le chemin
    element: <App />, // element le composant ou page associé
  },
  {
    path: "/Connexion", // Pour connexion
    element: <Login />,
  },
  {
    path: "/Inscription", // Pour Inscription
    element: <Inscription />,
  },
  {
    path: "/verifemail", // Pour vérifier le email
    element: <EmailConfirmation />,
  },
  {
    path: "*", // le reste des pages
    element: <h2 className='dark:text-[#83794f] '>La page n'existe pas</h2>,
  }

]);

initial()

// racine de notre site web qui permet de pouvoir naviguer avec les routes configurés
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

