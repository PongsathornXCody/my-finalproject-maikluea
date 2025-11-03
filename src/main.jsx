import { StrictMode } from 'react'
import './sw-registration.js'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//New
import { BrowserRouter } from 'react-router-dom'
import { Maindisplay } from './components/maindisplay.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/my-finalproject-maikluea">
    <App />
  </BrowserRouter>,
)
