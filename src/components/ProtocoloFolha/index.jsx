import './styleFolha.css'
import { Proto } from '../../pages/Protocolos/App'

export function Folha(){
    

  let nome = name
    console.log(nome);

  let data = Proto.data;
    console.log(data);




  // const name = localStorage.getItem("name")
  // console.log(name);

    return(
        <>
         <h1 id='ptAtendimento'>PROTOCOLO DE ATENDIMENTO</h1>
  <div className='container2'>
        <div className='dadosProtocolo'>
            <form action="">
              <section>
              <label htmlFor="">Nome da pessoa: {nome}</label>

              </section>
              <section>
                <label htmlFor="">Nome da empresa: {name}</label>
              </section>
              <section>
                <label htmlFor="">Data do atendimento: {data}</label>
              </section>
              <section>
                <label htmlFor="">Observações: Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores amet officiis beatae iure soluta nesciunt ea est eveniet deserunt dolores veniam dignissimos similique libero aperiam, accusamus ex totam eligendi ducimus!</label>
              </section>
            </form>

        </div>
        <div className='dadosProtocolo'>
              <form action="">
                <section>
                  <label htmlFor="">Numero do protocolo: 1615151515</label>
                </section>
                <section>
                  <label htmlFor="">Recebido em: 18/01/2023</label>
                </section>
              </form>
        </div>
      
  </div>
        
        
        </>

    )
}