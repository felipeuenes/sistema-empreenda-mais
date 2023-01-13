import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/App'
import './index.css'

import { AppRoutes } from './Routes'


import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <main>
      <AppRoutes/>
    
    
    </main>
    
    </BrowserRouter>
    
  </React.StrictMode>,
)
