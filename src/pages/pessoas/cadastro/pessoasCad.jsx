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
                <h1 id='tituloCadastro'>DADOS DE CADASTRO</h1>
                <div className='bloco1'>
                    <section>
                        <label htmlFor="date">Data de cadastro:</label>
                        <Input type='date' name='date' id='date' />
                    </section>

                    <section>
                        <label htmlFor="date">Agente responsável:</label>
                        <Select defaultValue="Selecione"
                    style={{width: 270}}
                    options={[
                        { value: 'fundamental-incompleto', label: "Luana Ferreira"},
                        { value: 'fundamental-completo', label: "Jorge Alysson"},
                       
                    ]}/>
                    </section>

                    
                </div>

                <h1 id='tituloCadastro'>DADOS DA PESSOA</h1>
                <div className='bloco2'>
                    <section>
                        <label htmlFor="nome">Nome completo: *</label>
                        <Input type="text" name="" id="nome" placeholder='Nome completo...' required />
                    </section>

                    <section>
                        <label htmlFor="nomeSocial">Nome social:</label>
                        <Input type="text" name="" id="nomeSocial" placeholder='Se houver...' />
                    </section>

                    <section>
                        <label htmlFor="cpf">CPF: *</label>
                        <Input type="text" id="cpf" maxLength={14} placeholder="xxx.xxx.xxx-xx" required />

                    </section>
                    <section>
                        <label htmlFor="rg">RG:</label>
                        <Input type="number" id="rg" placeholder='Registro Geral' required />

                    </section>
                    <section>
                        <label htmlFor="email">Email:</label>
                        <Input type="email" name="" id="email" placeholder='exemplo@exemplo.com' />

                    </section>
                    <section>
                        <label htmlFor="telefone">Telefone pessoal:</label>
                        <Input type="number" placeholder='(xx) x xxxx-xxxx' id='telefone' />
                    </section>

                  

           </div>
           <div className='bloco2'>
           <section>
                        <label htmlFor="situacao">Situação:</label>
                      
                        <Select defaultValue="Selecione"
                    style={{width: 200}}
                    options={[
                        { value: 'formal', label: "Empreendedor(a) formal"},
                        { value: 'informal', label: "Empreendedor(a) informal"},
                        { value: 'empregado', label: "Empregado(a)"},
                        { value: 'desempregado', label: "Desempregado(a)"},
                        { value: 'aposentado', label: "Aposentado(a)"},
                        { value: 'agricultor', label: "agricultor(a)"},
                        
                       
                    ]}/>
                    </section>
                <section>
                    <label htmlFor="escola">Escolaridade</label>
                    <Select defaultValue="Selecione"
                    style={{width: 200}}
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
                        { value: 'Menos que R$ 1.000,00', label: "Menos que R$ 1.000,00"},
                        { value: 'Entre R$1.001,00 - R$2.500,00', label: "Entre R$1.001,00 - R$2.500,00"},
                        { value: 'Entre R$2.501,00 - R$5.000,00', label: "Entre R$2.501,00 - R$5.000,00"},
                        { value: 'Mais que R$5.000,00', label: "Mais que R$5.000,00"},
                        
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
                        { value: 'sim', label: "Sim"},
                        { value: 'nao', label: "Não"},
                        { value: 'talvez', label: "Talvez"},
                        
                    ]}/>
                </section>
           </div>
           <h1 id='tituloCadastro'>DADOS DO LOGRADOURO PESSOAL</h1>
           <div className='bloco3'>
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
                        { value: 'jucas', label: "Jucás - Sede"},
                        { value: 'sao pedro', label: "São Pedro do Norte"},
                        { value: 'vila mel', label: "Vila Mel"},
                        
                    ]}/>
                    </section>
                    
           </div>
           <div className='bloco3'>
                    <section>
                        <label htmlFor="cidade">Cidade:</label>
                        <Input id='cidade'/>
                    </section>
                    <section>
                        <label htmlFor="estado">Estado:</label>
                        <Input id='estado'/>
                    </section>
           </div>
           <div className='btn-cadastrar'><button><img src="/src/images/icones/icone-cadastrar.png" />SALVAR CADASTRO</button></div>
           </form>
        </div>
    )
}