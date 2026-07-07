import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Change from 'workflow-root' to a standard 'root' (or fallback to 'workflow-root' for backward compat)
const container = document.getElementById('root') || document.getElementById('workflow-root');
if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}




