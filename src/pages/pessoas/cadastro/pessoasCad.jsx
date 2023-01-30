//PESSOAS > CADASTRO > PÁGINA
import './pessoasCad.css'

import { Link, NavLink } from 'react-router-dom'


export function CadPessoas() {


    return (
        <div className='container'>
            <div className='titulo'>
                <img src="/src/images/logo-pessoas.png" id='icone-pagina'/><h1>CADASTRAR PESSOA</h1>
                <Link to="/pessoas"><button><img src="/src/images/icones/icone-lista.png" id='icone-lista'/>LISTAGEM</button></Link>
            </div>

            <form className='form' action="">
                <h2>DADOS DE CADASTRO</h2>
                <div className='form-bloco'>
                    <section>
                        <label htmlFor="date">Data de cadastro:</label>
                        <input type='date' name='' id='dataCadastro' />
                    </section>

                    <section>
                        <label htmlFor="date">Agente responsável:</label>
                        <select name="" id="agente" required>
                            <option value="" disabled selected hidden>selecione</option>
                            <option value="">Jorge Alysson</option>
                            <option value="">Luana Ferreira</option>
                        </select>
                    </section>

                    <section>
                        <label htmlFor="situacao">Status:</label>
                        <select name="" id="situacao">
                            <option value="" disabled selected hidden>selecione</option>
                            <option value="">Cliente/Participante</option>
                            <option value="">Desistente/Não participa</option>
                            <option value="">Patrocinador</option>
                        </select>
                    </section>
                </div>

                <h2>DADOS DA PESSOA</h2>
                <div className='form-bloco'>
                    <section>
                        <label htmlFor="name">Nome completo:</label>
                        <input type="text" name="" id="name" placeholder='Nome completo...' required />

                    </section>
                    <section>

                        <label htmlFor="cpf">Cadastro Pessoa Física:</label>
                        <input type="number" maxLength={14} placeholder="CPF" />

                    </section>
                    <section>
                        <label htmlFor="rg">Registro Geral:</label>
                        <input type="number" id='rg' placeholder='RG' required />

                    </section>
                    <section>

                        <label htmlFor="email">E-mail:</label>
                        <input type="email" name="" id="email" placeholder='exemplo@exemplo.com' />

                    </section>
                    <section>
                        <label htmlFor="telefone">Telefone pessoal:</label>
                        <input type="number" placeholder='(xx)x xxxx-xxxx' id='telefone' />

                    </section>

                </div>
                <div className='form-bloco'>
                    <section>
                        <label htmlFor="raca">Cor/Raça:</label>
                        <select name="" id="raca">
                            <option value="" disabled hidden selected>selecione</option>
                            <option value="">Amarela</option>
                            <option value="">Branca</option>
                            <option value="">Indígena</option>
                            <option value="">Negra</option>
                            <option value="">Parda</option>
                        </select>
                    </section>

                    <section>
                        <label htmlFor="sexo">Sexo:</label>
                        <select name="" id="sexo">
                            <option value="" >selecione</option>
                            <option value="">Feminino</option>
                            <option value="">Masculino</option>
                        </select>
                    </section>

                    <section>
                        <label htmlFor="estadoCivil">Estado civil:</label>
                        <select name="" id="estadoCivil">
                            <option value="">selecione</option>
                            <option value="">Casado/a</option>
                            <option value="">Divorciado/a</option>
                            <option value="">Solteiro/a</option>
                            <option value="">União estável</option>
                            <option value="">Viúvo/a</option>
                        </select>
                    </section>

                    <section>
                        <label htmlFor="escolaridade">Escolaridade:</label>
                        <select name="" id="escolaridade">
                            <option value="" disabled hidden selected>selecione</option>
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
                            <option value="" disabled hidden selected>selecione</option>
                            <option value="">Menos que R$1000</option>
                            <option value="">De R$1000 a R$2000</option>
                            <option value="">De R$2001 a R$5000</option>
                            <option value="">Mais de R$5000</option>
                        </select>
                    </section>
                </div>

                <h2>LOGRADOURO PESSOAL</h2>
                <div className='form-bloco'>
                    <section>
                        <label htmlFor="endRua">Rua/Avenida:</label>
                        <input type="text" name="" id="endRua" />
                    </section>

                    <section>
                        <label htmlFor="endNum">Número:</label>
                        <input type="text" name="" id="endNum" />
                    </section>

                    <section>
                        <label htmlFor="endBairro">Bairro/Distrito:</label>
                        <select name="" id="endBairro">
                            <option value="" disabled hidden selected>selecione</option>
                            <option value="">Canafístula</option>
                            <option value="">Mel</option>
                            <option value="">Montenegro</option>
                            <option value="">Poço Grande</option>
                            <option value="">São Pedro do Norte</option>
                            <option value="">Sede: Alto da Paz</option>
                            <option value="">Sede: Alto do Tó</option>
                            <option value="">Sede: Centro</option>
                            <option value="">Sede: Coco Verde</option>
                            <option value="">Sede: Nossa Senhora de Fátima</option>
                            <option value="">Sede: Padre Manoel Lemos Braga</option>
                            <option value="">Sede: Planalto</option>
                            <option value="">Sede: Sagrada Família</option>
                            <option value="">Sede: São José</option>
                            <option value="">Sede: São Mateus</option>
                        </select>
                    </section>

                    <section>
                        <label htmlFor="endCidade">Cidade:</label>
                        <input type="text" name='' id='endCidade' />
                    </section>

                    <section>
                        <label htmlFor="endEstado">Estado:</label>
                        <input type="text" name='' id='endCidade' />
                    </section>
                </div>
                <div className='btn-cadastrar'><button><img src="/src/images/icones/icone-cadastrar.png"/>SALVAR CADASTRO</button></div>
            </form>

        </div>
    )
}