import { Link, NavLink } from 'react-router-dom'
import './style.css'
import logoEM from '../../images/logo-em.png'

export function Header() {
    
return(
    <header>
    <nav>
        <ul>
        <NavLink to="/" className={({isAtive}) => isAtive ? 'active' : ''}><li title='Página inicial'><img id='logoEM' src={logoEM}/></li></NavLink>
            <Link to="/pessoas"><li title='Cadastro de pessoas'>Pessoas</li></Link>
            <Link to="/empreendimentos"><li title='Cadastro de negócios'>Negócios</li></Link>
            <li title='Cadastro de eventos'>Eventos</li>
            <li title='Cadastro de cursos'>Cursos</li>
            <li title='Cadastro de mentorias'>Mentorias</li>
            <li title='Cadastro de atendimentos'>Atendimentos</li>
            <Link to="/protocolos"><li title='Cadastro de protocolos'>Protocolos</li></Link>
            
        </ul>
        <div className='titulos-pagina'>
            <h1></h1>
        </div>
    </nav>
    </header>
)
}