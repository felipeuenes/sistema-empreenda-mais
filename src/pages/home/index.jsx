//INÍCIO > PÁGINA
import './home.css'
// import { Progress, Scape } from 'antd'
import { Progress, Space } from 'antd'



export function Home() {


  return (


    <div className='container'>
      <h1>INFORMAÇÕES E ESTATÍSTICAS</h1>

        <div className='cont-estatisticas'>
          <section id='sectionEstatisticas'>
            <h2>PARTICIPANTES DO PROGRAMA:</h2>
            <p id='variavelNumbers'>188</p>
            
            
          </section>
        </div>
        <div className='cont-estatisticas2'>
            <section id='sectionEstatisticas2'>
            <h2>
              MEI's
            </h2>
            <p id='variavelNumbers'>63</p>
          </section>
          <section id='sectionEstatisticas2'>
            <h2>ME's</h2>
            <p id='variavelNumbers'>41</p>
          </section>
          <section id='sectionEstatisticas2'>
            <h2>EPP's</h2>
            <p id='variavelNumbers'>3</p>
            </section>
        </div>
         
     
       



    

    </div>

  )
}


