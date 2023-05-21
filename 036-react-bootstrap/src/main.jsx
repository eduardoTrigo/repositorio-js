import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BasicExample from './nav.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasicExample/>
    <App />
  </React.StrictMode>,
)
