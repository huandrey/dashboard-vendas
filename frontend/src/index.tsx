import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Bootstrap 
import 'bootstrap/dist/css/bootstrap.css'

// My styles
import './assets/css/global.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
