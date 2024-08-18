import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { App } from './App';

import '@/shared/styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
