import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</StrictMode>
</BrowserRouter>
)
