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
						<input type="text" name="" id="razaoSocial" required placeholder='Ex: Maria da Silva' />
					</section>

					<section >
						<label htmlFor="nomeFantasia">Nome fantasia:</label>
						<input type="text" id='nomeFantasia' placeholder='Ex: Ateliê da Maria' />
					</section>

					<section >
						<label htmlFor="responsavel">Responsável:</label>
						<input type="text" id='responsavel' required />
					</section>

					<section >
						<label htmlFor="segmento">Segmento:</label>
						<input type="text" id='segmento' required placeholder='Ex: Artesanato' />
					</section>

					<section>
						<label htmlFor="atvPrincipal">Atividade principal:</label>
						<input type="text" name="" id="atvPrincipal" required />
					</section>

					<section>
						<label htmlFor="atvSecundaria">Atividade secundária:</label>
						<input type="text" name="" id="atvSecundaria" placeholder='Caso haja...' />
					</section>
				</div>

				<h2>DADOS NUMÉRICOS</h2>
				<div className='form-bloco'>
					<section>
						<label htmlFor="cnpj">CNPJ:</label>
						<input type="number" name="" id="cnpj" placeholder='xx.xxx.xxx/xxxx-xx' />
					</section>

					<section>
						<label htmlFor="datacnpj">Inscrição no CNPJ:</label>
						<input type="date" name="" id="datacpnj" />
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

				<h2>DADOS DO LOGRADOURO COMERCIAL</h2>
				<div className='form-bloco'>
					<section>
						<label htmlFor="cep">CEP:</label>
						<input type="text" name="" id="cep" placeholder="xxxxx-xxx" />
					</section>

					<section>
						<label htmlFor="rua">Rua/Avenida:</label>
						<input type="text" name="" id="rua" />
					</section>

					<section>
						<label htmlFor="complemento">Complemento:</label>
						<input type="text" name="" id="complemento" />
					</section>

					<section>
						<label htmlFor="numero">Número:</label>
						<input type="text" name="" id="numero" />
					</section>

					<section>
						<label htmlFor="bairro">Bairro/Distrito:</label>
						<select name="" id="bairro">
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
							<option value="">Sede: São José</option>
							<option value="">Sede: São Mateus</option>
						</select>
					</section>

					<section>
						<label htmlFor="cidade">Cidade:</label>
						<input type="text" name='' id="cidade" />
					</section>

					<section>
						<label htmlFor="estado">Estado:</label>
						<input type="text" name='' id="estado" />
					</section>
				</div>

				<h2>DIAGNÓSTICO MARCO ZERO</h2>
				<div className='form-bloco'></div>

				<h2>DIAGNÓSTICO MARCO UM</h2>
				<div className='form-bloco'></div>
			</form>
			</div>

		</div>
	)

}