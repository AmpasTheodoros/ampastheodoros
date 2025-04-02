import { inject } from '@vercel/analytics'; // ✅ Must be at the top
inject(); 

import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById("root")!).render(<App />);
