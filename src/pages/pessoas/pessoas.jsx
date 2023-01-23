/*PESSOAS > LISTAGEM > PÁGINA*/

// import { useState } from 'react'
// import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './pessoas.css'

export function Pessoas() {
return (
<div>
    <div className='abas'>
          <a href="#" id='listagem'>OPÇÃO 1</a>
          <p>PESSOAS</p>
          <a href="#" id='cadastro'>OPÇÃO 2</a>
    </div>
</div>
)
}