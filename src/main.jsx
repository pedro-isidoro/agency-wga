import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'
import App from './app.jsx';
import PrivacySite from './privacy-site.jsx';
import FormSend from './formSend.jsx';

import './css/variable.css';
import './css/reset.css';
import './css/index.css';
import './css/responsive.css'

const router = createBrowserRouter([
  {
      path: "/",
      element: < Outlet/>,
      children: [
        {
          path: "/",
          element: < App/>,
        },
        {
          path: "politica-de-privacidade",
          element: <PrivacySite />,
        },
        {
          path: "formulario-enviado",
          element: <FormSend />,
        }
      ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)