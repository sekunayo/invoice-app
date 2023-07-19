import { injectGlobal } from '@emotion/css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './common/styles/font.css'
import { globalStyles } from './common/styles/global_styles';
import reportWebVitals from './reportWebVitals';

injectGlobal(globalStyles)
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
