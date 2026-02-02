//import { StrictMode } from 'react' -- viene por defecto en React 18 pero no lo usamos aquí
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>    
  <App />
  </BrowserRouter>,
  )
