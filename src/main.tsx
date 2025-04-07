import { inject } from '@vercel/analytics'; 
inject(); 

import clarity from "@microsoft/clarity";
clarity.init(import.meta.env.VITE_CLARITY_ID);

import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

declare global {
    interface Window {
      dataLayer: any[];
      gtag: (...args: any[]) => void;
    }
}

if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-QZ593Y8PM1';
    script.async = true;
    document.head.appendChild(script);
  
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args) {
      window.dataLayer.push(args);
    };
  
    window.gtag('js', new Date());
    window.gtag('config', 'G-QZ593Y8PM1');
  }

  createRoot(document.getElementById("root")!).render(<App />);
  