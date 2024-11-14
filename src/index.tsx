import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './'
import App from './components/app/App.tsx'
import React from 'react';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);