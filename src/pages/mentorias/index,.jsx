import { Link, NavLink } from 'react-router-dom'
import { List } from '../../components/listas'
import './styleMentorias.css'


export function Mentorias() {


    return (
        <div className='container'>
            <div className='secao-titulo'>
                <img src="/src/images/logo-mentorias.png" id='icone-titulo' /><h1>Mentorias</h1>
                <Link to="/cadastro-negocios"><button><img src="/src/images/icones/mais.png" id='icone-botao-cad' />CADASTRAR NOVA</button></Link>
            </div>
            <List />
        </div>
    )
}