import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initWebVitals } from './utils/webVitals'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Track Core Web Vitals (LCP, FID, CLS, TTFB) → Umami
initWebVitals()

// Register PWA Service Worker
import './pwa'


