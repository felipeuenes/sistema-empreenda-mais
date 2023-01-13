import { Link, NavLink } from 'react-router-dom'

import './style.css'


export function Header() {
    

    return(
        <>
       
       <header>
        <img src="../images/logo-empreenda-mais.png" alt="empreenda-mais" />

        <ul>
            <NavLink to={'/pessoas'}><li>Pessoas</li></NavLink>
            <li>Empreendimentos</li>
            <li>Atendimentos</li>
            <li>Protocolos</li>
            <li>Eventos</li>
            <li>Cursos</li>
        </ul>
       </header>
        
        
        </>
    )
}