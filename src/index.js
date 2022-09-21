import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from "redux";
import './index.css';
import AppPage from './components/pages/AppPage';
import {Provider} from "react-redux";
import reducer from "./redux/reducer";


const persistedState = localStorage.getItem('languageKey')
    ? JSON.parse(localStorage.getItem('languageKey'))
    : {}
const store = createStore(reducer, persistedState);

store.subscribe(() => {
    localStorage.setItem('languageKey', JSON.stringify(store.getState()));
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <AppPage />
      </Provider>
  </React.StrictMode>
);

