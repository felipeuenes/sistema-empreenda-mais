import './atendimento.css'
import { Link } from 'react-router-dom'
import { List } from '../../components/listas'

export function Atendimento() {


    return (
        <div className='container'>
            <div className='secao-titulo'>
                <img src="/src/images/logo-atendimentos.png" id='icone-titulo' /><h1>Atendimentos</h1>
                <Link to="/cadastro-negocios"><button><img src="/src/images/icones/mais.png" id='icone-botao-cad'/>CADASTRAR NOVO</button></Link>
            </div>
            <List />

        </div>
    )
}