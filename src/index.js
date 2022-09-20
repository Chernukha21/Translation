import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from "redux";
import './index.css';
import AppPage from './components/pages/AppPage';
import {Provider} from "react-redux";
import reducer from "./redux/reducer";


const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <AppPage />
      </Provider>
  </React.StrictMode>
);

