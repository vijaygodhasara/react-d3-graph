// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Import your custom CSS if needed
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);