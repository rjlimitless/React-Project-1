import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* 
  babel transpiles JSX, into JavaScript:

  return React.createElement('div', null ,[
    React.createElement('Nav').. etc
  ]);

*/