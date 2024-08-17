import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import './shared/styles/global.css';

import { App } from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/contact',
        element: <h1>Contacto</h1>,
      },
      {
        path: '/our-services',
        element: <h1>Nossos serviços</h1>,
      },
      {
        path: '/about-us',
        element: <h1>Sobre nós</h1>,
      },
    ],
    errorElement: <h1>Página de erro</h1>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
