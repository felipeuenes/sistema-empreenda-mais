import './style.css'

import { Link, NavLink } from 'react-router-dom'


export function CadasPessoas() {


    return(
        <div className='container'>
                <h1>Cadastrando pessoa</h1>
            <div className='formulario-pessoas'>
                    <form action="">
                        <div className='block'>
                            <section>
                            <label htmlFor="name">Nome de empreendedor:</label>
                        <input type="text" name="" id="name" placeholder='Nome...'/>
                            </section>
                        </div>


                    </form>
            </div>

        </div>


    )
}