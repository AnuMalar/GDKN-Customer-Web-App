import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reducer,{initialState} from './components/context/reducer';
import {StateProvider } from './components/context/StateProvider';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode> ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

