import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import Docs from './docs/Docs';
import './index.css';
import '../node_modules/highlight.js/styles/ocean.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Docs />
  </React.StrictMode>
);
