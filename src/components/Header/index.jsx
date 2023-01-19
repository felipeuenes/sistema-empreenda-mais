import { Link, NavLink } from 'react-router-dom'

import './style.css'
import logoEM from '../../images/logo-empreenda-mais.png'


export function Header() {
    

    return(
        <>
       
       <header>
        <Link to='/'><img src={logoEM} id='imgLogo'/></Link>
<nav>

        <ul>
            {/* <NavLink to="/" className={({isAtive}) => isAtive ? 'active' : ''}><li>Home</li></NavLink> */}
            <Link to="/empreendimentos"><li>Empreendimentos</li></Link>
            <Link to="/pessoas"><li>Pessoas</li></Link>
            
            <li>Atendimentos</li>
            <Link to="/protocolos"><li>Protocolos</li></Link>
            <li>Eventos</li>
            <li>Cursos</li>
            <li>Mentorias</li>
        </ul>
</nav>
       </header>
        
        
        </>
    )
}