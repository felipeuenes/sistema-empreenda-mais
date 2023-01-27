//INÍCIO > PÁGINA
import './home.css'
// import { Progress, Scape } from 'antd'
import { Progress, Space } from 'antd'



export function Home() {
  

  return (
  
    
<div className='container'>
  <h1>INÍCIO</h1>
      <section className='cont-estatisticas'>
        <section>
       <Space>
        <section>
        <h1>Visitas em Janeiro</h1>
        
            <Progress type="dashboard" percent={30}/>
        </section>
        <section>
            <h1>Metas 2023</h1>
            <Progress type="dashboard" percent={5} gapDegree={30}/>
        </section>


       </Space>
        </section>

            
        
        {/* <p>
          PLACEHOLDER DAS ESTATÍSTICAS<br/>
          Apresentados ao programa: X <br/>
          Participantes do programa: X <br/>
          Mulheres de Negócio: X <br/>
          Participantes do programa: X <br/>
          Participantes do programa: X <br/>
        </p> */}
        
      </section>
</div>
  
  )
}


