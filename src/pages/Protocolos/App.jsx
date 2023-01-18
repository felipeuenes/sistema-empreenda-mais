// import { useState } from 'react'
import { useState } from 'react'
import './styleProtocolo.css'
import ImageConstru from '../../images/contrucao.jpg'

export function Proto() {
  
  const [atendimento, setAtendimento] = useState('')
  console.log(atendimento);

  return (
  <div className='container'>
      <h1>GERAR PROTOCOLO</h1>
      <div className='formulario-protocolo'>
          <form action="">
            <div className='block'>
                <section>
                  <label htmlFor="nome">Nome da pessoa:</label>
                  <input type="text" name="" id="nome" placeholder='Nome...'/>
                </section>
                <section>
                  <label htmlFor="data">Data do atendimento</label>
                  <input type="date" name="" id="data" />
                </section>
                <section>
                  <label htmlFor="nomeEmpresa">Nome da Empresa:</label>
                  <input type="text" name="" id="nomeEmpresa" placeholder='Nome da empresa...'/>
                </section>
                <section>
                  <label htmlFor="atendimento">Tipo de atendimento:</label>
                  <select name="" id="atendimento" onChange={(e) => setAtendimento(e.target.value)}>
                    <option value="150">Visitas em geral</option>
                    <option value="250">Atendimento para prestação de serviço</option>
                    <option value="350">Assinatura de documento em ambiente interno</option>
                    <option value="450">Consultorias, mentorias, visitas da gerente do Empreenda Mais</option>
                    <option value="550">Acompanhamento de especialistas ou parceiros - mentorias ou consultorias</option>
                    <option value="650">Palestras, oficinas, outros...</option>
                  </select>
                </section>
              

            </div>
            <div className='block2'>
                  <section>
                    <button className='botaoGerar'>GERAR</button>
                  </section>
            </div>
          </form>
      </div>
  </div>
  )
}


