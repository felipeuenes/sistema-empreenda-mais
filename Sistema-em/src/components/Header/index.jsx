import { Link, NavLink } from 'react-router-dom'

import './style.css'
import logoEM from '../../images/logo-empreenda-mais.png'


export function Header() {
    

    return(
        <>
       
       <header>
        <img src={logoEM} />
<nav>

        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/empreendimentos"><li>Empreendimentos</li></Link>
            {/* <li>Empreendimentos</li> */}
            <li>Atendimentos</li>
            <li>Protocolos</li>
            <li>Eventos</li>
            <li>Cursos</li>
        </ul>
</nav>
       </header>
        
        
        </>
    )
}