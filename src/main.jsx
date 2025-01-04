import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LoadScript } from '@react-google-maps/api'
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadScript googleMapsApiKey="AIzaSyA7EukrZIp1dd3r9KWoJM5WRiYc-leobQw">
      <App />
      <Analytics/>
    </LoadScript>
  </StrictMode>,
)
