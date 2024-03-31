import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import {thunk} from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/reducers';
import App from './pages/App';
import './index.css';
import { getUsers } from './actions/users.actions';



const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) 
);

  store.dispatch(getUsers())

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
