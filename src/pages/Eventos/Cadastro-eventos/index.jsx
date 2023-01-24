import './styleEventos.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function CadastroEvento(){


        

    return(
        <div className='container'>
            <h1 className='titulo'>CADASTRO EVENTO</h1>
        <div className='formulario-eventos'>

            <form action="">
                <div className='primeiros-inputs'>

               <section >
                        <label htmlFor="name">Nome do evento: *</label>
                        <input type="text" id='name' required/>
               </section>
                <section>

                        <label htmlFor="tipo">Tipo de evento: *</label>
                        <select name="" id="tipo">
                                <option value="">Público geral</option>
                                <option value="">Participantes do Empreenda Mais</option>
                        </select>
                </section>
                
               

                </div>
                
                
         <div className='bloc2'>
                    
                    <section>
                             <label htmlFor="cnpj">CNPJ:</label>
                             <input type="number" name="" id="cnpj"/>
                    </section>
     
                     <section>
     
                             <label htmlFor="datacpnj">Data CNPJ:</label>
                             <input type="date" name="" id="datacpnj" />
                     </section>
                     <section>
     
                             <label htmlFor="inscricaoEs">Inscrição Estadual:*</label>
                             <input type="number" name="" id="inscricaoEs" />
                     </section>
                     <section>
     
                             <label htmlFor="inscricaoMu">Inscrição Municipal:*</label>
                             <input type="number" name="" id="nscricaoMu" />
                     </section>
                     <section>
     
     
                             <label htmlFor="telefone">Telefone:</label>
                             <input type="text" id='telefone' placeholder='(  )9 XXXX-XXXX' required/>
                     </section>
                     <section>
     
                             
                             <label htmlFor="whats">Whatsapp:</label>
                             <input type="text" name="" id="whats" placeholder='(  )9 XXXX-XXXX'/>
                     </section>
                     
     
                     </div>


                <div className='bloc3'>

                <section>
                        <label htmlFor="endereco">Endereço:</label>
                        <input type="text" name="" id="endereco" placeholder='Rua, avenida...' required/>
                </section>
                <section>

                        <label htmlFor="bairro">Bairro:</label>
                        <input type="text" name="" id="bairro" />
                </section>
                <section>
                        <label htmlFor="atvPrincipal">Atividade principal:</label>
                        <input type="text" name="" id="atvPrincipal" required/>
                </section>
                <section>
                        <label htmlFor="atvSecundaria">Atividade secundária:</label>
                        <input type="text" name="" id="atvSecundaria" />
                </section>
                </div>
                <div className='bloc4'>

                <section>
                        <label htmlFor="categoria">Categoria de negócio:</label>
                        <select name="" id="categoria">
                            <option value="">Vestuário</option>
                            <option value="">Gastronomia</option>
                            <option value="">Mercantil</option>
                            <option value="">Agronegócio</option>
                            <option value="">Artesanato</option>
                            <option value="">Casa agropecuária</option>
                            <option value="">Decorações / festas</option>
                            <option value="">Depositos e distribuidoras</option>
                        </select>
                </section>
                 <section>

                        <label htmlFor="situacao">Situação atual:</label>
                        <select name="" id="situacao">
                            <option value="true">Formal</option>
                            <option value="false">Não formal</option>
                            <option value="false">Em processo de formalização</option>
                        </select>
                       
                </section> 
                <section>
                        <label htmlFor="nameEmpresario">Nome do empresário:</label>
                        <input type="text" name="" id="nameEmpresario" />
                </section>
                </div>
                <section className='buttonCadas'>
                    <button>SALVAR INFORMAÇÕES</button>
                </section>

            </form>
        </div>
        
        </div>
  )
    
}