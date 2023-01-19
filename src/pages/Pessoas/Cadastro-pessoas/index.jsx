import './styleCadas.css'

import { Link, NavLink } from 'react-router-dom'


export function CadasPessoas() {


    return(
        <div className='container'>
                <h1>Cadastrando pessoa</h1>
            <div className='formulario-pessoas'>
                    <form action="">
                        <div className='block'>
                            <section>
                            <label htmlFor="name">Nome de empreendedor:*</label>
                        <input type="text" name="" id="name" placeholder='Nome...' required/>
                            </section>

                            <section>
                                <label htmlFor="tipo">Qual o tipo de pessoa?*</label>
                                <select name="" id="tipo">
                                    <option value="">Cliente</option>
                                    <option value="">Patrocinador</option>
                                </select>

                            </section>
                            <section>
                                <label htmlFor="cpf" id='labelCPF'>CPF: *</label>
                                <input type="number" name="" id="cpf" placeholder='CPF...' required/>

                            </section>
                            <section>
                                <label htmlFor="rg">RG: *</label>
                                <input type="number" id='rg'/>
                            </section>
                            <section>
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="" id="email" placeholder='exemplo@exemplo.com'/>
                            </section>

                        </div>

                        <div className='block2'>
                                <section>
                                    <label htmlFor="sexo">Sexo</label>
                                    <select name="" id="sexo">
                                        <option value="">Masculino</option>
                                        <option value="">Feminino</option>
                                    </select>
                                </section>
                                <section>
                                    <label htmlFor="estado">Estado Civil:</label>
                                    <select name="" id="estado">
                                        <option value="">Casado</option>
                                        <option value="">Solteiro</option>
                                        <option value="">Viúvo</option>
                                        <option value="">Divorciado</option>
                                    </select>
                                </section>
                                <section>
                                    <label htmlFor="situacao">Situação do participante</label>
                                    <select name="" id="situacao">
                                        <option value="">Opcoes</option>
                                        <option value="">Opcoes</option>
                                        <option value="">Opcoes</option>
                                    </select>
                                </section>
                                <section>
                                    <label htmlFor="indicacao">Indicaria o programa?</label>
                                    <select name="" id="indicacao">
                                        <option value="">Sim</option>
                                        <option value="">Não</option>
                                    </select>
                                </section>
                                <section>
                                    <label htmlFor="escolaridade">Escolaridade:</label>
                                    <select name="" id="escolaridade">
                                        <option value="">Fundamental incompleto</option>
                                        <option value="">Fundamental completo</option>
                                        <option value="">Médio incompleto</option>
                                        <option value="">Médio completo</option>
                                        <option value="">Superior incompleto</option>
                                        <option value="">Superior completo</option>
                                    </select>
                                </section>
                                <section>
                                    <label htmlFor="renda">Renda familiar:</label>
                                    <select name="" id="renda">
                                        <option value="">Menor que R$1.000</option>
                                        <option value="">Entre R$1.000 e R$2.000</option>
                                        <option value="">Entre R$2.000 e R$5.000</option>
                                        <option value="">Mais de R$5.000</option>
                                    </select>
                                </section>
                        </div>
                        <div className='block3'>
                                <section>
                                    <label htmlFor="endereco">Endereço:</label>
                                    <input type="text" name="" id="endereco" placeholder='Rua, avenida...'/>
                                </section>
                               
                                <section>
                                    <label htmlFor="telefone">Telefone:</label>
                                    <input type="number" placeholder='(00)X XXXX-XXXX' id='telefone'/>
                                </section>
                        </div>
                        <section className='buttonCadas'>
                    <button>SALVAR INFORMAÇÕES</button>
                </section>


                    </form>
            </div>

        </div>


    )
}