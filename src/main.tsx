import { ChakraProvider } from '@chakra-ui/react';
import { BaseLayoutPage } from '@/shared/layouts';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { App } from './App';

import '@/shared/styles/global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <BaseLayoutPage.Root>
        <BaseLayoutPage.Header />
        <App />
        <BaseLayoutPage.Footer />
      </BaseLayoutPage.Root>
    ),
  },
  {
    path: '/contact',
    element: (
      <BaseLayoutPage.Root>
        <BaseLayoutPage.Header />
        <h1>Contactos</h1>
        <BaseLayoutPage.Footer />
      </BaseLayoutPage.Root>
    ),
  },
  {
    path: '/our-services',
    element: (
      <BaseLayoutPage.Root>
        <BaseLayoutPage.Header />
        <h1>Nossos serviços</h1>
        <BaseLayoutPage.Footer />
      </BaseLayoutPage.Root>
    ),
  },
  {
    path: '/about-us',
    element: (
      <BaseLayoutPage.Root>
        <BaseLayoutPage.Header />
        <h1>Sobre nós</h1>
        <BaseLayoutPage.Footer />
      </BaseLayoutPage.Root>
    ),
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
