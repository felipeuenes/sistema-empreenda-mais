//PRINCIPAL > PÁGINA 
import React  from 'react'
import ReactDOM from 'react-dom/client'
import  './index.css'

import { AppRoutes } from './routes/index'
import { BrowserRouter } from 'react-router-dom'

import { Header } from './components/header'
import { Footer } from './components/footer/footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <main>
      <AppRoutes/>
    </main>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
