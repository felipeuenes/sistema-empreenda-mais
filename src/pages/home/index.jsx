//INÍCIO > PÁGINA

// import { useState } from 'react'
import './home.css'
import ImageConstru from '../../images/contrucao.jpg'

export function Home() {
  

  return (
  
    
    <div className='container'>
      <div className='imageConstru'>
        <img src={ImageConstru} alt="" srcset="" />
      </div>
      <section className='cont-estatisticas'>
        <p>
          PLACEHOLDER DAS ESTATÍSTICAS <br/>
          Apresentados ao programa: X <br/>
          Participantes do programa: X <br/>
          Mulheres de Negócio: X <br/>
          Participantes do programa: X <br/>
          Participantes do programa: X <br/>
        </p>
        
      </section>
    </div>
  
  )
}


