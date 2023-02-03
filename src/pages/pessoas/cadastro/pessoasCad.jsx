//PESSOAS > CADASTRO > PÁGINA
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Input } from 'antd'
import './pessoasCad.css'
import { Select, Space } from 'antd'





export function CadPessoas() {

   
    // const handleChange = (value: string) => {
    //     console.log(`selected ${value}`);
    //   };

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
                        <Select name="" id="agente" required>
                            <option value="" disabled selected hidden>selecione</option>
                            <option value="">Jorge Alysson</option>
                            <option value="">Luana Ferreira</option>
                        </Select>
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
                        <input type="text" name="" id="nomeCompleto" placeholder='Nome completo...' required />
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
                    <label htmlFor="escola">Escolaridade</label>
                    <Select defaultValue="Selecione"
                    style={{width: 270}}
                    options={[
                        { value: 'fundamental-incompleto', label: "Fundamental incompleto"},
                        { value: 'fundamental-completo', label: "Fundamental completo"},
                        { value: 'medio-imcompleto', label: "Médio imcompleto"},
                        { value: 'medio-completo', label: "Médio completo"},
                        { value: 'superior-incompleto', label: "Superior incompleto"},
                        { value: 'superior-completo', label: "Superior completo"},
                        
                    ]}/>
                </section>
                <section>
                    <label htmlFor="renda">Renda familiar</label>
                    <Select defaultValue="Selecione a renda"
                    style={{width: 250}}
                    options={[
                        { value: '', label: "Menos que R$ 1.000,00"},
                        { value: '', label: "Entre R$1.001,00 - R$2.500,00"},
                        { value: '', label: "Entre R$2.501,00 - R$5.000,00"},
                        { value: '', label: "Mais que R$5.000,00"},
                        
                    ]}/>
                </section>
                <section>
                    <label htmlFor="">Deficiência:</label>
                <Select defaultValue="Selecione"
                    style={{width: 250}}
                    options={[
                        { value: '', label: "texto aqui"},
                        { value: '', label: "texto aqui"},
                        { value: '', label: "texto aqui"},
                        
                    ]}/>
                </section>
                <section>
                    <label htmlFor="">Recomenda o programa?</label>
                    <Select defaultValue="Selecione"
                    style={{width: 250}}
                    options={[
                        { value: '', label: "Sim"},
                        { value: '', label: "Não"},
                        { value: '', label: "Talvez"},
                        
                    ]}/>
                </section>
           </div>
           <h1 id='tituloCadastro'>DADOS DO LOGRADOURO PESSOAL</h1>
           <div className='dadosLogradouro'>
                    <section>
                        <label htmlFor="cep">CEP:</label>
                        <Input placeholder='00000-000'id='cep'/>
                    </section>
                    <section>
                        <label htmlFor="rua">Rua/Avenida:</label>
                        <Input id='rua'/>
                    </section>
                    <section>
                        <label htmlFor="complemento">Complemento</label>
                        <Input id='complemento' placeholder='Apartamento, prédio, casa...'/>
                    </section>
                    <section>
                        <label htmlFor="n">Número:</label>
                        <Input type='number' id='n'/>
                    </section>
                    <section>
                        <label htmlFor="">Bairro/Distrito:</label>
                    <Select defaultValue="Selecione"
                    style={{width: 250}}
                    options={[
                        { value: '', label: "texto aqui"},
                        { value: '', label: "texto aqui"},
                        { value: '', label: "texto aqui"},
                        
                    ]}/>
                    </section>
                    
           </div>
           <div className='dadosLogradouro'>
                    <section>
                        <label htmlFor="cidade">Cidade:</label>
                        <Input id='cidade'/>
                    </section>
                    <section>
                        <label htmlFor="estado">Estado:</label>
                        <Input id='estado'/>
                    </section>
           </div>
           <div className='botaoSalvar'>
                    <button>Cadastrar</button>
           </div>
           </form>
           <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}