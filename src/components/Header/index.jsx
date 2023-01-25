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
                <li title='Cadastro de pessoas'><img src="../../images/pessoas.png" alt=""/>Pessoas</li>
            </Link>
            <Link to="/negocios"><li title='Cadastro de negócios'>Negócios</li></Link>
            <Link to='/eventos'><li>Eventos</li></Link>
            <li>Cursos</li>
            <li>Mentorias</li>
            <Link to="/atendimento"><li>Atendimentos</li></Link>
            <Link to="/protocolos"><li>Protocolos</li></Link>
            
        </ul>
        
    </nav>
    </header>
)
}