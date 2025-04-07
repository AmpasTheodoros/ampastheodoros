import { inject } from '@vercel/analytics'; 
inject(); 

import clarity from "@microsoft/clarity";
clarity.init(import.meta.env.VITE_CLARITY_ID);

import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById("root")!).render(<App />);
