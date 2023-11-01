import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';

import './css/variable.css';
import './css/reset.css';
import './css/index.css';
import './css/responsive.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <App />
    </>
  </React.StrictMode>,
);