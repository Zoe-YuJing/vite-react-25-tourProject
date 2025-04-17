import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/all.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
