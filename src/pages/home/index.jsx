//INÍCIO > PÁGINA
import './home.css'
// import { Progress, Scape } from 'antd'
import { Progress, Space } from 'antd'


export function Home() {


  return (


    <div className='container'>
      <h1>INFORMAÇÕES E ESTATÍSTICAS</h1>

      <div className='cont-estatisticas'>
        {/* <section>
          <Space>
            <section>
              <h1>Visitas em Janeiro</h1>
              <Progress type="dashboard" percent={50} />
            </section>
            <section>
              <h1>Metas 2023</h1>
              <Progress type="dashboard" percent={5} gapDegree={30} />
            </section>


          </Space>
        </section> */}

        {/* <table>
          <th id='situacaoEmpre'>Situação dos empreendedores</th>
          <th>Geral</th>
          <th>Sede</th>
          <th>Baixio da Donana</th>
          <th>Canafístula</th>
          <th>Mel</th>
          <th>Monte Negro</th>
          <th>Poço Grande</th>
          <th>São Pedro do Norte</th>
              <tr>
                <td>Empreendedores - Apresentados ao programa</td> 
                <td>436</td> 
                <td>239</td> 
                <td>16</td> 
                <td>6</td> 
                <td>47</td> 
                <td>1</td> 
                <td>2</td> 
                <td>125</td> 
              </tr>
              <tr>
                <td>Empreendedores - Participantes do programa</td> 
                <td>188</td> 
                <td>108</td> 
                <td>1</td> 
                <td>2</td> 
                <td>18</td> 
                <td>1</td> 
                <td>0</td> 
                <td>58</td> 
              </tr>
        </table> */}

        </div>
        <div className='cont-estatisticas'>
          <section id='sectionEstatisticas'>
            <h2>PARTICIPANTES DO PROGRAMA:</h2>
            <p id='variavelNumbers'>188</p>
          </section>
          <section id='sectionEstatisticas'>
            <h2>
              MEI's
            </h2>
            <p id='variavelNumbers'>63</p>
          </section>
          <section id='sectionEstatisticas'>
            <h2>ME's</h2>
            <p id='variavelNumbers'>41</p>
          </section>
          <section id='sectionEstatisticas'>
            <h2>EPP's</h2>
            <p id='variavelNumbers'>3</p>
          </section>
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
  </p>*/}

    </div>

  )
}


