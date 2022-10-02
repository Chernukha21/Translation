import React from 'react';
import ReactDOM from 'react-dom/client';
import {applyMiddleware, compose, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import reducer from "./redux/reducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(reducer, composedEnhancer);

// const persistedState = localStorage.getItem('languageKey')
//     ? JSON.parse(localStorage.getItem('languageKey'))
//     : {}
//
//
// store.subscribe(() => {
//     localStorage.setItem('languageKey', JSON.stringify(store.getState()));
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

