import './style.css'


export function CadastroEmpre(){

    return(
        <>
        <div className='formulario-empreedimento'>
            <form action="">
               <section className='primeiros-inputs'>
                    <label htmlFor="name">Nome fantasia: *</label>
                        <input type="text" id='name'/>

                        <label htmlFor="razao">Razão Social:*</label>
                        <input type="text" name="" id="razao" />

               </section>
                
               <section className='segunda-part'>
                    <label htmlFor="cnpj">CNPJ:*</label>
                        <input type="text" name="" id="cnpj" />


                        <label htmlFor="datacpnj">Data CNPJ:</label>
                        <input type="date" name="" id="datacpnj" />

                        <label htmlFor="inscricaoEs">Inscrição Estadual:*</label>
                        <input type="number" name="" id="inscricaoEs" />

                        <label htmlFor="inscricaoMu">Inscrição Municipal:*</label>
                        <input type="text" name="" id="" />


                        <label htmlFor="telefone">Telefone:</label>
                        <input type="text" id='telefone'/>
               </section>
            </form>
        </div>
        
        </>

    )
}