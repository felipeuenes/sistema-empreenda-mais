//PESSOAS > CADASTRO > PÁGINA
import './pessoasCad.css'

import { Link, NavLink } from 'react-router-dom'


export function CadPessoas() {


    return(
    <div className='container'>
        <div className='abas'>
            <p>PESSOAS</p>
            <a href="#" id='cadastro'>LISTAGEM</a>
            <a href="#" id='cadastro'>CADASTRO</a>
        </div>

        <section className='secao'>
        <div className='formulario-pessoas'>
            <form action="">
                              <h2>Dados do cadastro</h2>
                <div className='block1'>
                    <section>
                              <label htmlFor="date">Data de cadastro</label>
                              <input type='date' name='' id='dataCadastro' placeholder='' />

                    </section>
                    <section>

                              <label htmlFor="date">Agente responsável</label>
                                  <select name="" id="agente" required>
                                      <option value="" disabled selected hidden>selecione</option>
                                      <option value="">Jorge Alysson</option>
                                      <option value="">Luana Ferreira</option>
                                  </select>

                    </section>
                    <section>
                              <label htmlFor="situacao">Situação quanto ao Empreenda Mais</label>
                                  <select name="" id="situacao">
                                      <option value="" disabled selected hidden>selecione</option>
                                      <option value="">Cliente/Participante</option>
                                      <option value="">Desistente/Não participa</option>
                                      <option value="">Patrocinador</option>
                                  </select>

                    </section>

                </div>
                <section>
      
      
                          </section>
      
                          <section>
                              <h2>Dados da pessoa</h2>
      
                              <label htmlFor="name">Nome completo</label>
                              <input type="text" name="" id="name" placeholder='Nome completo' required/>
      
                              <label htmlFor="cpf">Cadastro Pessoa Física</label>                
                              <input type="text" maxLength={14} placeholder="CPF"/>
      
                              <label htmlFor="rg">Registro Geral</label>
                              <input type="number" id='rg' placeholder='RG' required/>
      
                              <label htmlFor="email">E-mail</label>
                              <input type="email" name="" id="email" placeholder='exemplo@exemplo.com'/>
      
                              <label htmlFor="telefone">Telefone pessoal</label>
                              <input type="number" placeholder='(XX)X XXXX-XXXX' id='telefone'/>
      
                              <label htmlFor="raca">Cor/Raça</label>
                                  <select name="" id="raca">
                                      <option value="" disabled hidden selected>selecione</option>
                                      <option value="">Amarela</option>
                                      <option value="">Branca</option>
                                      <option value="">Indígena</option>
                                      <option value="">Negra</option>
                                      <option value="">Parda</option>
                                  </select>
      
                              <label htmlFor="sexo">Sexo</label>
                                  <select name="" id="sexo">
                                      <option value="" disabled hidden selected>selecione</option>
                                      <option value="">Feminino</option>
                                      <option value="">Masculino</option>
                                      <option value="">Outro</option>
                                  </select>
      
                              <label htmlFor="estadoCivil">Estado civil</label>
                                  <select name="" id="estadoCivil">
                                      <option value="" disabled hidden selected>selecione</option>
                                      <option value="">Casado/a</option>
                                      <option value="">Divorciado/a</option>
                                      <option value="">Solteiro/a</option>
                                      <option value="">União estável</option>
                                      <option value="">Viúvo/a</option>                                
                                  </select>
      
                                  <label htmlFor="escolaridade">Escolaridade</label>
                                      <select name="" id="escolaridade">
                                          <option value="" disabled hidden selected>selecione</option>
                                          <option value="">Fundamental incompleto</option>
                                          <option value="">Fundamental completo</option>
                                          <option value="">Médio incompleto</option>
                                          <option value="">Médio completo</option>
                                          <option value="">Superior incompleto</option>
                                          <option value="">Superior completo</option>
                                      </select> 
      
                                  <label htmlFor="renda">Renda familiar</label>
                                      <select name="" id="renda">
                                          <option value="" disabled hidden selected>selecione</option>
                                          <option value="">Menos que R$1000</option>
                                          <option value="">De R$1000 a R$2000</option>
                                          <option value="">De R$2001 a R$5000</option>
                                          <option value="">Mais de R$5000</option>
                                      </select>
                          </section>
      
                          <section>
                              <h2>Logradouro residencial</h2>
                                  <label htmlFor="endRua">Rua/Avenida/Sítio</label>
                                  <input type="text" name="" id="endRua"/>
      
                                  <label htmlFor="endNum">Número</label>
                                  <input type="text" name="" id="endNum"/>
      
                                  <label htmlFor="endBairro">Bairro/Distrito</label>
                                      <select name="" id="endBairro">
                                          <option value="" disabled hidden selected>selecione</option>
                                          <option value="">Canafístula</option>
                                          <option value="">Mel</option>
                                          <option value="">Montenegro</option>
                                          <option value="">Poço Grande</option>
                                          <option value="">São Pedro do Norte</option>
                                          <option value="">Sede: Alto da Paz</option>
                                          <option value="">Sede: Alto do Tó</option>
                                          <option value="">Sede: Centro</option>
                                          <option value="">Sede: Coco Verde</option>
                                          <option value="">Sede: Nossa Senhora de Fátima</option>
                                          <option value="">Sede: Padre Manoel Lemos Braga</option>                                    
                                          <option value="">Sede: Planalto</option>
                                          <option value="">Sede: Sagrada Família</option>
                                          <option value="">Sede: São Mateus</option>
                                          <option value="">Sede: São José</option>
                                      </select>
      
                                  <label htmlFor="endCidade">Cidade</label>
                                  <input type="text" name='' id='endCidade'/>
                              </section>   
                          <div className='block2'>
                              
                              
                              </div>
                              <section className='buttonCadas'>
                          <button id='btPessoas'>Salvar cadastro</button>
                      </section>

                      
      
      
                          </form>
                  </div>
                  </section>
    </div>
    )
}