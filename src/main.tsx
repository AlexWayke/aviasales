import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './tailwind.scss';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  throw new Error('Root element not found');
}
