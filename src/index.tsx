import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { SnackbarProvider } from 'notistack';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3500}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <App />
    </SnackbarProvider>
  </StrictMode>
);
