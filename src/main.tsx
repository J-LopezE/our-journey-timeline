import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ReactGA from 'react-ga4'

const TRACKING_ID = import.meta.env.VITE_GA_ID;

if (TRACKING_ID) {
  ReactGA.initialize(TRACKING_ID);
  
  ReactGA.send({ 
    hitType: "pageview", 
    page: window.location.pathname 
  });
} else {
  console.warn("Google Analytics ID no encontrado. Revisa tu archivo .env o Vercel.");
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
