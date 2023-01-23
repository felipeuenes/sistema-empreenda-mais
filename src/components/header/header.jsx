//CABEÇALHO > PÁGINA
import { Link, NavLink } from 'react-router-dom'
import './header.css'
import logoEM from '../../images/logo-em.png'

export function Header() {
    
return(
    <header>
    <nav>
        <ul>
        <NavLink to="/" className={({isAtive}) => isAtive ? 'active' : ''}>
            <li className='logoEM' title='Página inicial'><img id='logoEM' src={logoEM}/></li>
        </NavLink>

        <div className='dropdown'>
            <li title=''>Pessoas</li>
            <div className='dropdown-lista'>
                <NavLink to="/lista-pessoas" className='dropdown-item'>Listagem</NavLink>
                <NavLink to="/cadastro-pessoas" className='dropdown-item'>Cadastrar</NavLink>
            </div>
        </div>

        <div className='dropdown'>
            <li title=''>Negócios</li>
            <div className='dropdown-lista'>
                <NavLink className='dropdown-item' to="/negocios">Listagem</NavLink>
                <NavLink className='dropdown-item' to="/negociosCad">Cadastrar</NavLink>
            </div>
        </div>

        <div className='dropdown'>
            <li title=''>Eventos</li>
            <div className='dropdown-lista'>
                <NavLink className='dropdown-item' to="/">Listagem</NavLink>
                <NavLink className='dropdown-item' to="/">Cadastrar</NavLink>
            </div>
        </div>

        <div className='dropdown'>
            <li title=''>Cursos</li>
            <div className='dropdown-lista'>
                <NavLink className='dropdown-item' to="/">Listagem</NavLink>
                <NavLink className='dropdown-item' to="/">Cadastrar</NavLink>
            </div>
        </div>

        <div className='dropdown'>
            <li title=''>Mentorias</li>
            <div className='dropdown-lista'>
                <NavLink className='dropdown-item' to="/">Listagem</NavLink>
                <NavLink className='dropdown-item' to="/">Cadastrar</NavLink>



























































































































































































































































































































































































































































































































                ..................................
            </div>
        </div>

        <div className='dropdown'>
            <li title=''>Atendimentos</li>
            <div className='dropdown-lista'>
                <NavLink className='dropdown-item' to="/">Listagem</NavLink>
                <NavLink className='dropdown-item' to="/">Cadastrar</NavLink>
            </div>
        </div>

        <div className='dropdown'>
            <li title=''>Protocolos</li>
            <div className='dropdown-lista'>
                <NavLink className='dropdown-item' to="/">Listagem</NavLink>
                <NavLink className='dropdown-item' to="/protocolos">Cadastrar</NavLink>
            </div>
        </div>
        </ul>
    </nav>
    </header>
)
}