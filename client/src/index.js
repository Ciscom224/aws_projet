import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore ,compose} from 'redux';
import {thunk} from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/reducers';
import App from './pages/App';
import './index.css';
import { getUsers } from './actions/users.actions';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)) 
);

  store.dispatch(getUsers())

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
