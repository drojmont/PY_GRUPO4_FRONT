import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from '@material-tailwind/react';
import { ProductContext } from './context/ProductContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ThemeProvider>
        <ProductContext>
          <App />
        </ProductContext>
      </ThemeProvider>
    </StrictMode>
  </BrowserRouter>
);
