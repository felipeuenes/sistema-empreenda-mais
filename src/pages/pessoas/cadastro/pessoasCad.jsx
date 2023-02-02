//PESSOAS > CADASTRO > PÁGINA
// import '/src/components/formularios/formularios.css'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Input } from 'antd'
import './pessoasCad.css'
import { Select, Space } from 'antd'
import { Button } from 'antd/es/radio'




export function CadPessoas() {

   
    // const handleChange = (value: string) => {
    //     console.log(`selected ${value}`);
    //   };

    return (
        <div className='container'>
            <h1 id='tituloCadastro'>DADOS DO CADASTRO</h1>
           <div className='dadosdoCadastro'>
                <section>
                    <label htmlFor="data">Data de cadastro:</label>
                    <Input type="date" name="" id="data" />
                </section>
                <section>
                    <label htmlFor="ag">Agente responsável:</label>
                    <Select defaultValue="Nome do agente"
                    style={{width: 250}}
                    options={[
                        { value: 'Jorge', label: "Jorge Alysson"},
                        { value: 'Luana', label: "Luana Ferreira"},
                    ]}/>
                </section>
                <section>
                    <label htmlFor="status">Status:</label>
                    <Select defaultValue="Status"
                    style={{width: 250}}
                    options={[
                        { value: 'participante', label: "Participante do programa"},
                        { value: 'não-participa', label: "Não participa"},
                        { value: 'patrocinador', label: "Patrocinador"},
                        { value: 'desistente', label: "Desistente"},
                    ]}/>
                </section>
                    
           </div>
           <h1 id='tituloCadastro'>DADOS PESSOAIS</h1>
           <div className='DadosPessoa'>
                <section>
                    <label htmlFor="nome">Nome completo: *</label>
                    <Input placeholder='Nome' id='nome' required/>
                </section>
                <section>
                    <label htmlFor="nomesocial">Nome social:</label>
                    <Input type="" name="" id="nomesocial" />
                </section>
                <section>
                    <label htmlFor="cpf">CPF *</label>
                    <Input type="text" name="" id="cpf" required/>
                </section>
                <section>
                    <label htmlFor="rg">Registro Geral:</label>
                    <Input type="text" name="" id="rg" placeholder='RG'/>
                </section>
           </div>
           <div className='DadosPessoa'>
                <section>
                    <label htmlFor="email">E-mail:</label>
                    <Input type='email' placeholder='1234@exemplo.com'/>
                </section>
                <section>
                    <label htmlFor="tel">Telefone pessoal:</label>
                    <Input placeholder='(00) 9 0000-0000'/>
                </section>
                <section>
                    <label htmlFor="situacao">Situação:</label>
                    <Select defaultValue="Situação"
                    style={{width: 150}}
                    options={[
                        { value: 'participante', label: "texto aqui"},
                        { value: 'não-participa', label: "texto aqui"},
                        { value: 'patrocinador', label: "texto aqui"},
                        
                    ]}/>
                </section>
                <section>
                    <label htmlFor="cor">Cor/Raça:</label>
                    <Select defaultValue="Selecione"
                    style={{width: 150}}
                    options={[
                        { value: 'branco', label: "Branco"},
                        { value: 'pardo', label: "Pardo"},
                        { value: 'negro', label: "Negro"},
                        
                    ]}/>
                </section>
                <section>
                    <label htmlFor="sexo">Sexo:</label>
                <Select defaultValue="Selecione"
                    style={{width: 150}}
                    options={[
                        { value: 'masculino', label: "Masculino"},
                        { value: 'feminino', label: "Feminino"},
                        
                    ]}/>
                </section>
                <section>
                    <label htmlFor="estado-civil">Estado cívil:</label>
                    <Select defaultValue="Selecione"
                style={{width: 150}}
                options={[
                    { value: 'solteiro', label: "Solteiro(a)"},
                    { value: 'casado', label: "Casado(a)"},
                    { value: 'divorciado', label: "Divorciado(a)"},
                    { value: 'viuvo', label: "Viúvo(a)"},
                    
                ]}/>
                </section>

           </div>
           <div className='DadosPessoa'>
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

        </div>
    )
}