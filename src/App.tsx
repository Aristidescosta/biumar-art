import { ChakraProvider } from '@chakra-ui/react';
import { BaseLayoutPage } from '@/shared/layouts';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorPage, Home } from '@/shared/pages';

export const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <BaseLayoutPage.Root>
          <BaseLayoutPage.Header />
          <Home />
          <BaseLayoutPage.Footer />
        </BaseLayoutPage.Root>
      ),
      errorElement: (
        <BaseLayoutPage.Root>
          <BaseLayoutPage.Header />
          <ErrorPage />
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
      errorElement: (
        <BaseLayoutPage.Root>
          <BaseLayoutPage.Header />
          <ErrorPage />
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
      errorElement: (
        <BaseLayoutPage.Root>
          <BaseLayoutPage.Header />
          <ErrorPage />
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
      errorElement: (
        <BaseLayoutPage.Root>
          <BaseLayoutPage.Header />
          <ErrorPage />
          <BaseLayoutPage.Footer />
        </BaseLayoutPage.Root>
      ),
    },
  ]);

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};
