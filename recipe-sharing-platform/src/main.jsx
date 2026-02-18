// src/main.jsx
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Remove StrictMode just to see if the error persists
createRoot(document.getElementById('root')).render(
  <App />
)