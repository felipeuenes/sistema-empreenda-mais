// import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './App.css'

export function Empreendimentos() {
  

  return (
  <div className='container'>
      <div className='cabecalho'>

      <h1>Empreendimentos</h1>

        <Link to="/cadastro-empreendimentos" ><button>Cadastrar novo</button></Link>
      </div>


      <div className='lista-empreendedores'>
       
      </div>
  </div>
  )
}


