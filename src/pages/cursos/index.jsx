import { Link, NavLink } from 'react-router-dom'
import { List } from '../../components/listas'
import './styleCursos.css'


export function Cursos() {


    return (
        <div className='container'>
            <div className='secao-titulo'>
                <img src="/src/images/logo-cursos.png" id='icone-titulo' /><h1>Cursos</h1>
                <Link to="/cadastro-negocios"><button><img src="/src/images/icones/mais.png" id='icone-botao-cad' alt="" />CADASTRAR NOVO</button></Link>
            </div>
            <List />
        </div>
    )
}