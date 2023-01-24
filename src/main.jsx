//PÁGINA PRINCIPAL

//Importando elementos
import React  from 'react' //react.
import './index.css' //estilo desta página.
import ReactDOM from 'react-dom/client' //DOM do react.
import { BrowserRouter } from 'react-router-dom' //rotas do navegador.
import { AppRoutes } from './routes/index' //rotas.

import { Header } from './components/header' //cabeçalho.
import { Footer } from './components/footer/footer.jsx' //rodapé.

//Criando esqueleto das páginas:
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
