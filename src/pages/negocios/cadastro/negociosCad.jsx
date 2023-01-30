//NEGÓCIOS > CADASTRO > PÁGINA
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import '/src/components/formularios/formularios.css'

export function CadNegocios() {
	return (
		<div className='container'>
			<div className='titulo'>
				<img src="/src/images/logo-negocios.png" id='icone-pagina' /><h1>CADASTRAR NEGÓCIO</h1>
				<Link to="/negocios"><button><img src="/src/images/icones/icone-lista.png" id='icone-lista' />LISTAGEM</button></Link>
			</div>
			<div className='form'><form action="">

				<h2>DADOS DE RECONHECIMENTO</h2>
				<div className='form-bloco'>
				<section>
						<label htmlFor="razaoSocial">Razão social:</label>
						<input type="text" name="" id="razaoSocial" required placeholder='Ex: Maria da Silva'/>
					</section>

					<section >
						<label htmlFor="nomeFantasia">Nome fantasia:</label>
						<input type="text" id='nomeFantasia' placeholder='Ex: Ateliê da Maria'/>
					</section>

					<section >
						<label htmlFor="responsavel">Responsável:</label>
						<input type="text" id='responsavel' required/>
					</section>

					<section >
						<label htmlFor="segmento">Segmento:</label>
						<input type="text" id='segmento' required placeholder='Ex: Artesanato'/>
					</section>

					<section>
						<label htmlFor="atvPrincipal">Atividade principal:</label>
						<input type="text" name="" id="atvPrincipal" required />
					</section>

					<section>
						<label htmlFor="atvSecundaria">Atividade secundária:</label>
						<input type="text" name="" id="atvSecundaria" placeholder='Caso haja...'/>
					</section>
				</div>

				<h2>DADOS NUMÉRICOS</h2>
				<div className='form-bloco'>
					<section>
						<label htmlFor="cnpj">CNPJ:</label>
						<input type="number" name="" id="cnpj" placeholder='xx.xxx.xxx/xxxx-xx'/>
					</section>

					<section>
						<label htmlFor="datacnpj">Inscrição no CNPJ:</label>
						<input type="date" name="" id="datacpnj"/>
					</section>

					<section>
						<label htmlFor="inscriEstadual">Inscrição Estadual:</label>
						<input type="number" name="" id="inscriEstadual" />
					</section>

					<section>
						<label htmlFor="inscriMunicipal">Inscrição Municipal:</label>
						<input type="number" name="" id="inscriMunicipal" />
					</section>

					<section>
						<label htmlFor="telefoneCom">Telefone comercial:</label>
						<input type="text" id='telefoneCom' placeholder='(xx) 9 xxxx-xxxx' required />
					</section>

					<section>
						<label htmlFor="telefoneWhats">Telefone (Whatsapp):</label>
						<input type="text" name="" id="telefoneWhats" placeholder='(xx) 9 xxxx-xxxx' />
					</section>
				</div>

				<h2>DADOS DE LOGRADOURO COMERCIAL</h2>
				<div className='form-bloco'>
					<section>
						<label htmlFor="endereco">Rua/Avenida:</label>
						<input type="text" name="" id="endereco" placeholder='' required />
					</section>
					<section>

						<label htmlFor="bairro">Bairro/Distrito:</label>
						<input type="text" name="" id="bairro" />
					</section>
					
				</div>
				<div className='form-bloco'>

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
				<section className='btn-cadastrar'>
					<button><img src="/src/images/icones/icone-cadastrar.png" />SALVAR CADASTRO</button>
				</section>

			</form>
			</div>

		</div>
	)

}