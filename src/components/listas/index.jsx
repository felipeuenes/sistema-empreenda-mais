import './styleList.css'


export function List(){



    return(
        <>
         <div className='lista-pessoas'>
                <section className='pessoa-bloco1'>

                    <button className='btn-pesquisar'><img src='/src/images/icones/icone-pesquisa.png' />PESQUISAR</button>
                    <input className='barra-pesquisa' type="text" placeholder='Pesquise um nome...' />
                    <button className='btn-filtrar'><img src='/src/images/icones/icone-filtrar.png' />FILTRAR POR</button>

                    <section className='opcoes-filtro'>
                        {/* <div><input name="agente" type="checkbox" />Agente responsável</div>
                        <div><input name="adesao" type="checkbox" />Adesão</div>
                        <div><input name="codigo" type="checkbox" />Código</div>
                        <div><input name="nome" type="checkbox" />Nome completo</div>
                        <div><input name="cpf" type="checkbox" />CPF</div>
                        <div><input name="rg" type="checkbox" />RG</div>
                        <div><input name="telefone" type="checkbox" />Telefone</div>
                        <div><input name="email" type="checkbox" />Email</div>
                        <div><input name="endereco-res" type="checkbox" />Endereço residencial</div> */}
                    </section>
                </section>

                <section className='pessoa-bloco2'>
                    <table>
                        <thead>
                            <th>ADESÃO</th>
                            <th>NOME COMPLETO</th>
                            <th>CÓDIGO</th>
                            <th>CPF</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SIM</td>
                                <td>JORGE ALYSSON</td>
                                <td>0001</td>
                                <td>000.000.000-00</td>
                            </tr>
                            <tr>
                                <td>NÃO</td>
                                <td>LUANA FERREIRA</td>
                                <td>0002</td>
                                <td>000.000.000-01</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

            </div>
        
        
        </>
    )
}