// import { useState } from 'react'

import './styleProtocolo.css'
import ImageConstru from '../../images/contrucao.jpg'

export function Proto() {
  

  return (
  <div className='container'>
      <h1>GERAR PROTOCOLO</h1>
      <div className='formulario-protocolo'>
          <form action="">
            <div className='block'>
                <section>
                  <label htmlFor="nome">Nome do cliente:</label>
                  <input type="text" name="" id="nome" placeholder='Nome...'/>
                </section>
                <section>
                  <label htmlFor="data">Data do atendimento</label>
                  <input type="date" name="" id="data" />
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


