//PROTOCOLO > CADASTRO > PÁGINA
import { useState } from 'react'
import './protocoloCad.css'
import { render } from 'react-dom';

import { Link } from 'react-router-dom';
import { useContext } from 'react';





export function CadProtocolo(dadosProto) {




  
  async function handleSubmit(event) {
    event.preventDefault();

    const {nome, data, nomeEmpre } = event.target;

    const ProtoUser = {
      nome: nome.value,
      data: data.value,
      NomedaEmpresa: nomeEmpre.value
    }


    console.log(ProtoUser);
  }


  return (
  <div className='container'>
      <h1 id='h1Proto'>GERAR PROTOCOLO</h1>
      <div className='formulario-protocolo'>
          <form action="" onSubmit={handleSubmit}>
            <div className='block'>
                <section>
                  <label htmlFor="nome">Nome da pessoa:</label>
                  <input type="text" name="nome" id="nome" placeholder='Nome...' />
                </section>
                <section>
                  <label htmlFor="data">Data do atendimento</label>
                  <input type="date" name="data" id="data" />
                </section>
                <section>
                  <label htmlFor="nomeEmpresa">Nome da Empresa:</label>
                  <input type="text" name="nomeEmpre" id="nomeEmpresa" placeholder='Nome da empresa...'/>
                </section>
                <section>
                  <label htmlFor="atendimento">Tipo de atendimento:</label>
                  <select name="" id="atendimento">
                    <option value="150">Visitas em geral</option>
                    <option value="250">Atendimento para prestação de serviço</option>
                    <option value="350">Assinatura de documento em ambiente interno</option>
                    <option value="450">Consultorias, mentorias, visitas da gerente do Empreenda Mais</option>
                    <option value="550">Acompanhamento de especialistas ou parceiros - mentorias ou consultorias</option>
                    <option value="650">Palestras, oficinas, outros...</option>
                  </select>
                </section>
                
              

            </div>
              <div className='block3'>
                    <section>
                      <label htmlFor="refere">Refere-se a:</label>
                      <textarea name="" id="refere" cols="50" rows="8"></textarea>
                    </section>
                    <section>
                      <label htmlFor="obs">Observações:</label>
                      <textarea name="" id="" cols="50" rows="8"></textarea>
                    </section>
              </div>

            <div className='block2'>
                  <section>
                    <Link to="/imprimir"></Link>
                    <button className='botaoGerar' type='submit'>GERAR</button>
                  </section>
            </div>

            

        
          </form>
        
      </div>
      
  </div>
  )
}


