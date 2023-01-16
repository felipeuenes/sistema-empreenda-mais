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

                            <section>
                                <label htmlFor="tipo">Qual o tipo de pessoa? *</label>
                                <select name="" id="tipo">
                                    <option value="">Apoiador</option>
                                    <option value="">Apoiado</option>
                                </select>

                            </section>
                            <section>
                                <label htmlFor="cpf" id='labelCPF'>CPF: *</label>
                                <input type="text" name="" id="cpf" placeholder='CPF...'/>

                            </section>

                        </div>


                    </form>
            </div>

        </div>


    )
}