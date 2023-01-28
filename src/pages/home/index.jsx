//INÍCIO > PÁGINA
import './home.css'
// import { Progress, Scape } from 'antd'
import { Progress, Space } from 'antd'


export function Home() {


  return (
<<<<<<< HEAD
=======
  
    
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
>>>>>>> 67e9c6291ca8de92a3ce31cb1712810aa260136b


    <div className='container'>
      <h1>INÍCIO</h1>

      <div className='cont-estatisticas'>
        <section>
          <Space>
            <section>
              <h1>Visitas em Janeiro</h1>
              <Progress type="dashboard" percent={30} />
            </section>
            <section>
              <h1>Metas 2023</h1>
              <Progress type="dashboard" percent={5} gapDegree={30} />
            </section>


          </Space>
        </section>
        </div>
        <div className='cont-estatisticas'>

        <section>
         
        </section>

        </div>


        {/* <p>
          PLACEHOLDER DAS ESTATÍSTICAS<br/>
          Apresentados ao programa: X <br/>
          Participantes do programa: X <br/>
          Mulheres de Negócio: X <br/>
          Participantes do programa: X <br/>
          Participantes do programa: X <br/>
        </p> */}

    </div>

  )
}


