import './style.css'


export function CadastroEmpre(){

    return(
        <>
            <h1 className='titulo'>CADASTRO EMPREENDIMENTO</h1>
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
                        <input type="text" name="" id="nscricaoMu" />


                        <label htmlFor="telefone">Telefone:</label>
                        <input type="text" id='telefone'/>
                        
                        <label htmlFor="whats">Whatsapp:</label>
                        <input type="text" name="" id="whats" />
               </section>
                <section className='terceira-part'>

                        <label htmlFor="endereco">Endereço:</label>
                        <input type="text" name="" id="endereco" />

                        <label htmlFor="bairro">Bairro:</label>
                        <input type="text" name="" id="bairro" />


                        <label htmlFor="atvPrincipal">Atividade principal:</label>
                        <input type="text" name="" id="atvPrincipal" />


                        <label htmlFor="atvSecundaria">Atividade secundária:</label>
                        <input type="text" name="" id="atvSecundaria" />
                </section>
                <section className='ultima-part'>
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

                        <label htmlFor="situacao">Situação atual:</label>
                        <select name="" id="situacao">
                            <option value="">Formal</option>
                            <option value="">Não formal</option>
                            <option value="">Em processo de formalização</option>
                        </select>
                       
                </section>
                <section className='buttonCadas'>
                    <button>CADASTRAR</button>
                </section>

            </form>
        </div>
        
        </>

    )
}