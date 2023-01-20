// import { useState } from 'react'
// import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './App.css'

export function Pessoas() {
return (
  <div className='container'>
      <div className='cabecalho'>
          <h1>PESSOAS</h1>
          <Link to='/cadaspessoa'><button>CADASTRAR PESSOA</button></Link>
      </div>
  </div>
)
}