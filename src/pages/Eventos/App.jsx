// import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { List } from '../../components/listas'
import './App.css'

export function Eventos() {


  return (
    <div className='container'>
      <div className='secao-titulo'>
        <img src="/src/images/logo-eventos.png" id='icone-titulo' /><h1>Eventos</h1>
        <Link to="/cadastro-eventos"><button><img src="/src/images/icones/mais.png" id='icone-botao-cad' alt="" />CADASTRAR NOVO</button></Link>
      </div>

      <List />
    </div>
  )
}


