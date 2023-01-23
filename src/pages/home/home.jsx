//INÍCIO > PÁGINA

// import { useState } from 'react'
import './home.css'
import ImageConstru from '../../images/contrucao.jpg'

export function Home() {
  

  return (
  <div>
    <div className='abas'>
          <a href="#" id='opcao1'>OPÇÃO 1</a>
          <p>INÍCIO</p>
          <a href="#" id='opcao2'>OPÇÃO 2</a>
        </div>
    <div className='container'>
      <div className='imageConstru'>
        <img src={ImageConstru} alt="" srcset="" />
      </div>
    </div>
  </div>
  )
}


