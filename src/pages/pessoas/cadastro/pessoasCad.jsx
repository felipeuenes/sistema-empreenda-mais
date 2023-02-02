//PESSOAS > CADASTRO > PÁGINA
import '/src/components/formularios/formularios.css'

import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export function CadPessoas() {

    const [formPessoas, setFormPessoas] = useState({
        name: '',

    })

    const handleFormEdit = (event, name) =>{
        setFormPessoas({
            ...formPessoas,
            [name]: event.target.value
        })
    }

    const handleForm = async (event) => {
        try{
            event.preventDefault()
            const response = await fetch(`http://localhost:8080/`, {
                method: 'POST',
                body: JSON.stringify(formPessoas)
            })
            const json = await response.json()
            console.log(response.status);
            console.log(json);

        }catch(err){
            console.log('erro no sistema');
        }
        
    }

    return (
        <div className='container'>
            <div className='titulo'>
                <img src="/src/images/logo-pessoas.png" id='icone-pagina' /><h1>CADASTRAR PESSOA</h1>
                <Link to="/pessoas"><button><img src="/src/images/icones/icone-lista.png" id='icone-lista' />LISTAGEM</button></Link>
            </div>

            <form className='form' action="" method='POST'>
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
                        <label htmlFor="nomeCompleto">Nome completo:</label>
                        <input type="text" name="" id="nomeCompleto" placeholder='Nome completo...' required value={formPessoas.name} onChange={() => {handleFormEdit(e, name)}}/>
                    </section>

                    <section>
                        <label htmlFor="nomeSocial">Nome social:</label>
                        <input type="text" name="" id="nomeSocial" placeholder='Caso haja...' />
                    </section>

                    <section>
                        <label htmlFor="cpf">Número do CPF:</label>
                        <input type="number" id="cpf" maxLength={14} placeholder="xxx.xxx.xxx-xx" required />

                    </section>
                    <section>
                        <label htmlFor="rg">Número do RG:</label>
                        <input type="number" id="rg" placeholder='xxx.xxxx.xxx-x' required />

                    </section>
                    <section>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="" id="email" placeholder='exemplo@exemplo.com' />

                    </section>
                    <section>
                        <label htmlFor="telefone">Telefone pessoal:</label>
                        <input type="number" placeholder='(xx) x xxxx-xxxx' id='telefone' />
                    </section>

                    <section>
                        <label htmlFor="situacao">Situação:</label>
                        <select name="" id="situacao">
                            <option value="" disabled hidden selected>selecione</option>
                            <option value="">Empreendedor/a formal</option>
                            <option value="">Empreendedor/a não formal</option>
                            <option value="">Empregado/a</option>
                            <option value="">Desempregado/a</option>
                            <option value="">Aposentado/a</option>
                            <option value="">Agricultor/a</option>
                        </select>
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

                    <section>
                        <label htmlFor="deficiencia">Deficiência:</label>
                        <select name="" id="deficiencia">
                            <option value="" selected>selecione</option>
                            <option value="">Nenhuma</option>
                            <option value="">Mental</option>
                            <option value="">Auditiva</option>
                            <option value="">Visual</option>
                            <option value="">Motora</option>
                            <option value="">Múltiplas</option>
                            <option value="">Não declarada</option>
                        </select>
                    </section>

                    <section>
                        <label htmlFor="recomendacao">Recomenda o programa?</label>
                        <select name="" id="recomendacao">
                            <option value="" disabled hidden selected>selecione</option>
                            <option value="">Sim, recomendo</option>
                            <option value="">Talvez recomende</option>
                            <option value="">Não recomendo</option>
                        </select>
                    </section>
                </div>

                <h2>DADOS DO LOGRADOURO PESSOAL</h2>
                <div className='form-bloco'>
                    <section>
                        <label htmlFor="cep">CEP:</label>
                        <input type="text" name="" id="cep" placeholder="xxxxx-xxx" />
                    </section>

                    <section>
                        <label htmlFor="rua">Rua/Avenida:</label>
                        <input type="text" name="" id="rua" />
                    </section>

                    <section>
                        <label htmlFor="complemento">Complemento:</label>
                        <input type="text" name="" id="complemento" />
                    </section>

                    <section>
                        <label htmlFor="numero">Número:</label>
                        <input type="text" name="" id="numero" />
                    </section>

                    <section>
                        <label htmlFor="bairro">Bairro/Distrito:</label>
                        <select name="" id="bairro">
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
                        <label htmlFor="cidade">Cidade:</label>
                        <input type="text" name='' id="cidade" />
                    </section>

                    <section>
                        <label htmlFor="estado">Estado:</label>
                        <input type="text" name='' id="estado" />
                    </section>
                </div>
                <div className='btn-cadastrar'><button onClick={handleForm}><img src="/src/images/icones/icone-cadastrar.png" />SALVAR CADASTRO</button></div>
            </form>

        </div>
    )
}