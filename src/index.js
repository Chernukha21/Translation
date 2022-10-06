import React from 'react';
import ReactDOM from 'react-dom/client';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import reducer,{initialState} from "./redux/reducer";

const browserState = localStorage.getItem('store');
const persistedState = browserState ? JSON.parse(browserState) : initialState;

const store = createStore(reducer,persistedState, applyMiddleware(thunk));

store.subscribe(() => {
    localStorage.setItem('store', JSON.stringify(store.getState()));
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

