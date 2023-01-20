import { Link, NavLink } from 'react-router-dom'
import './style.css'
import logoEM from '../../images/logo-em.png'

export function Header() {
    
return(
    <header>
    <nav>
        <ul>
        <NavLink to="/" className={({isAtive}) => isAtive ? 'active' : ''}><li title='Página inicial'><img id='logoEM' src={logoEM}/></li></NavLink>
            <Link to="/pessoas"><li title='Cadastro de pessoas'>PESSOAS</li></Link>
            <Link to="/empreendimentos"><li title='Cadastro de negócios'>NEGÓCIOS</li></Link>
            <li title='Cadastro de eventos'>EVENTOS</li>
            <li title='Cadastro de cursos'>CURSOS</li>
            <li title='Cadastro de mentorias'>MENTORIAS</li>
            <li title='Cadastro de atendimentos'>ATENDIMENTOS</li>
            <Link to="/protocolos"><li title='Cadastro de protocolos'>PROTOCOLOS</li></Link>
            <a title='Configurações de usuário'>*USUÁRIO*</a>
        </ul>
        <div className='titulos-pagina'>
            <h1></h1>
        </div>
    </nav>
    </header>
)
}