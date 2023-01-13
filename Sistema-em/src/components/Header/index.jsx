import { NavLink } from 'react-router-dom'

import './style.css'
import logoEM from '../../images/logo-empreenda-mais.png'


export function Header() {
    

    return(
        <>
       
       <header>
        <img src={logoEM} />

        <ul>
            {/* <NavLink to={'/pessoas'}><li>Pessoas</li></NavLink> */}
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