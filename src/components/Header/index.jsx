import { Link, NavLink } from 'react-router-dom'
import './header.css'
import logoEM from '../../images/logo-em-branco.png'



export function Header() {
    return (
        <header>
            <nav className='menu'>
                <ul>
                    <NavLink to="/" >
                        <li title='Página inicial'><img id='logoEM' src={logoEM} /></li>
                    </NavLink>
                    <Link to="/pessoas">
                        <li title='Lista de pessoas'><img src="/src/images/icones/icone-pessoas.png" alt="" />Pessoas</li>
                    </Link>
                    <Link to="/negocios">
                        <li title='Lista de negócios (empreendimentos)'><img src="/src/images/icones/icone-negocios.png" alt="" />Negócios</li>
                    </Link>
                    <Link to="/eventos">
                        <li title='Lista de eventos'><img src="/src/images/icones/icone-eventos.png" alt="" />Eventos</li>
                    </Link>
                    <Link to="/">
                        <li title='Lista de cursos'><img src="/src/images/icones/icone-cursos.png" alt="" />Cursos</li>
                    </Link>
                    <Link to="/">
                        <li title='Lista de mentorias'><img src="/src/images/icones/icone-mentorias.png" alt="" />Mentorias</li>
                    </Link>
                    <Link to="/atendimentos">
                        <li title='Lista de atendimentos'><img src="/src/images/icones/icone-atendimentos.png" alt="" />Atendimentos</li>
                    </Link>
                    <Link to="/protocolos">
                        <li title='Lista de protocolos'><img src="/src/images/icones/icone-protocolos.png" alt="" />Protocolos</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}