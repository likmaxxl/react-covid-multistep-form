import React from 'react';
import ReactDOM from 'react-dom';
import './css/formStyle.css';
import CrudFormApp from './CrudFormApp';
import { BrowserRouter } from 'react-router-dom';
import {LogInContextProvider} from './loginContext/LoginContext'
ReactDOM.render(
  <React.StrictMode>
    <LogInContextProvider>
  <BrowserRouter>
    <CrudFormApp />
    </BrowserRouter>
  </LogInContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
