import './atendimento.css'
import { Link } from 'react-router-dom'
import { List } from '../../components/listas'

export function Atendimento() {
    

    return(
        <div className="container">

            <h1>Atendimentos</h1>
                <List/>

        </div>
    )
}