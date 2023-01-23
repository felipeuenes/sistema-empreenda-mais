import { Link, NavLink } from 'react-router-dom'
import './header.css'
import logoEM from '../../images/logo-em.png'

export function Header() {
    
return(
    <header>
    <nav>
        <ul>
        <NavLink to="/" className={({isAtive}) => isAtive ? 'active' : ''}><li title='Página inicial'><img id='logoEM' src={logoEM}/></li></NavLink>
            <Link to="/pessoas"><li title='Cadastro de pessoas'>Pessoas</li></Link>
            <Link to="/negocios"><li title='Cadastro de negócios'>Negócios</li></Link>
            <Link to='/eventos'> <li>Eventos</li></Link>
            <li>Cursos</li>
            <li>Mentorias</li>
            <li>Atendimentos</li>
            <Link to="/protocolos"><li>Protocolos</li></Link>
            
        </ul>
        <div className='titulos-pagina'>
            <h1></h1>
        </div>
    </nav>
    </header>
)
}