import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/* to navigate through routes */
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* to be able to navigate through pages on the website */}
    <BrowserRouter>
        <App />
    </BrowserRouter>
    
  </React.StrictMode>,
)
