import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterApp from './counterApp.jsx'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
)
