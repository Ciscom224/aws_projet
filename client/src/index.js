import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import './index.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Login from './pages/Login';
import Inscription  from './pages/Inscription';
import EmailConfirmation  from './pages/EmailConfirmation';

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Connexion",
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
    path: "*",
    element: <h2 className='dark:text-[#83794f] '>La page n'existe pas</h2>,
  }

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

