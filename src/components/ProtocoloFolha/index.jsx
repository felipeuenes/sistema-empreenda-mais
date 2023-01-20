import './styleFolha.css'
import { Proto } from '../../pages/Protocolos/App'



export function Folha(){
    

  // let nome = name
  //   console.log(nome);

  // let data = Proto();
  //   console.log(data);
  
 
    
  
  

    return(
        <>
         <h1 id='ptAtendimento'>PROTOCOLO DE ATENDIMENTO</h1>
  
  <div className='center'>
  <div className='container2'>
        <div className='dadosProtocolo'>
            <form action="">
              <section>
              <label htmlFor="">Nome da pessoa:  </label>

              </section>
              <section>
                <label htmlFor="">Nome da empresa: </label>
              </section>
              <section>
                <label htmlFor="">Data do atendimento: </label>
              </section>
              <section>
                <label htmlFor="">Refere-se a: <span></span></label>
              </section>
              <section>
                <label htmlFor="">Observações: <span></span></label>
              </section>
            </form>

        </div>
        <div className='dadosProtocolo2'>
              <form action="">
                <section>
                  <label htmlFor="">Numero do protocolo: <span>1615151515</span></label>
                </section>
                <section>
                  <label htmlFor="">Recebido em: <span>18/01/2023</span></label>
                </section>
              </form>
        </div>
      
  </div>
  </div>
        
        <div className='assinatura'>
          <section>
              <label htmlFor="">Assinatura: ___________________________________________</label>
            </section> 
          </div>

          
              <h1 id='viaCliente'>VIA DO CLIENTE</h1>
         
         <div className='center'>
         <div className='DoCliente'>
            <section>

            </section>

              <section>
                <label htmlFor="">Nº______________</label>
              </section>
              <section>
                <label htmlFor="">Assinatura: ________________________________________________________</label>
              </section>

              <section>
                <label htmlFor="">Data___/___/____</label>
              </section>

          </div>
         </div>
       
        </>

    )
}