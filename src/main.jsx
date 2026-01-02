import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './api/analytics'
import App from './App.jsx'
import "./chartSetup" 

createRoot(document.getElementById('root')).render(
  <StrictMode> 
        <App />
  </StrictMode>,
)
