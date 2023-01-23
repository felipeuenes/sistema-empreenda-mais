// import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './App.css'

export function Eventos() {
  

  return (
  <div className='container'>
      <div className='cabecalho'>

      <h1>Eventos</h1>

        <Link to="/cadasEvento" ><button id='btEmpre'>NOVO EVENTO</button></Link>
      </div>


      <div className='lista-empreendedores'>
       <table>
        <thead>
          <th>Nome do evento</th>
          <th>Data</th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          <tr>
              <td>Empreenda Mais</td>
              <td>12/12/1234</td>
              <td>Tipo de evento</td>
              <td>texto</td>
          </tr>
          <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>


        </tbody>
       </table>
      </div>
  </div>
  )
}


