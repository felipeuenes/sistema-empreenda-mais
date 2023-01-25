import { Link, NavLink } from 'react-router-dom'
import './header.css'
import logoEM from '../../images/logo-em.png'

export function Header() {
    
return(
    <header>
    <nav className='menu'>
        <ul>
        <NavLink to="/" className={({isAtive}) => isAtive ? 'active' : ''}><li title='Página inicial'><img id='logoEM' src={logoEM}/></li></NavLink>
            <Link to="/pessoas">
                <li title='Cadastro de pessoas'><img src="../../images/pessoas.png" alt=""/>PESSOAS</li>
            </Link>
            <Link to="/negocios"><li title='Cadastro de negócios'>NEGÓCIOS</li></Link>
            <Link to='/eventos'><li>EVENTOS</li></Link>
            <li>CURSOS</li>
            <li>MENTORIAS</li>
            <Link to="/atendimento"><li>ATENDIMENTOS</li></Link>
            <Link to="/protocolos"><li>PROTOCOLOS</li></Link>
            
        </ul>
        
    </nav>
    </header>
)
}