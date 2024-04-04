import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers/reducers';
import App from './pages/Accueil';
import Games from './pages/Games';
import QuizChoice from './pages/QuizChoice';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Quiz from './pages/Quiz';
import Classement from './pages/Classement';
import Amis from './pages/Amis';
import { getUsers } from './actions/users.actions';

// Redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(getUsers());

// Router
const route = createBrowserRouter([
  {
    path: "/", // chemin
    element: <App />, // composant associé
  },
  {
    path: "/games", // chemin
    element: <Games />, // composant associé
  },
  {
    path: "/games/quizchoice", // chemin
    element: <QuizChoice />, // composant associé
  },
  {
    path: "/amis", // chemin
    element: <Amis />, // composant associé
  },
  {
    path: "/classement", // chemin
    element: <Classement />, // composant associé
  },
  {
    path: "/games/quiz", // chemin
    element: <Quiz />, // composant associé
  },
  {
    path: "*", // le reste des pages
    element: <h2 className='dark:text-[#83794f] '>La page n'existe pas</h2>,
  }
]);

// Racine de l'application
const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={route}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RouterProvider>
  </Provider>
);
