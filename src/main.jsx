import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Explore from './pages/Explore.jsx'

const rootElement = document.getElementById('root')
const path = window.location.pathname

if (path === '/') {
  window.location.replace('/explore')
} else if (path === '/explore') {
  createRoot(rootElement).render(<Explore />)
} else {
  createRoot(rootElement).render(<App />)
}
