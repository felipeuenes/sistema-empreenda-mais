import '/src/components/formularios/formularios.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function CadastroEvento() {
	return (
		<div className='container'>
			<div className='titulo'>
				<img src="/src/images/logo-eventos.png" id='icone-pagina' /><h1>CADASTRAR EVENTO</h1>
				<Link to="/eventos"><button><img src="/src/images/icones/icone-lista.png" id='icone-lista' />LISTAGEM</button></Link>
			</div>

			<div className='form'>
				<form action="">
					<h2>DADOS BÁSICOS</h2>
					<div className='form-bloco'>
						<section>
							<label htmlFor="name">Nome do evento:</label>
							<input type="text" id='name' required />
						</section>

						<section>
							<label htmlFor="tipo">Público-alvo:</label>
							<select name="" id="tipo">
								<option value="">Qualquer pessoa</option>
								<option value="">Participantes do programa</option>
							</select>
						</section>

						<section>
							<label htmlFor="eveEntidade">Entidade:</label>
							<select id="entidades">
								<option selected>selecione</option>
								<option>Prefeitura de Jucás</option>
								<option>SEBRAE</option>
								<option>SENAC</option>
							</select>
						</section>

						<section>
							<label htmlFor="eveFacilitador">Facilitador/Instrutor:</label>
							<input type="text" placeholder='Nome completo' />
						</section>

						<section>
							<label htmlFor="eveModalidade">Modalidade:</label>
							<select id="modalidades">
								<option selected>selecione</option>
								<option>Presencial</option>
								<option>Online (À distância)</option>
							</select>
						</section>

					</div>

					<h2>DADOS TEMPORAIS</h2>
					<div className='form-bloco'>
						<section>
							<label htmlFor="eveInicio">Data de início:</label>
							<input type="date" />
						</section>

						<section>
							<label htmlFor="eveTermino">Data de término:</label>
							<input type="date" />
						</section>

						<section>
							<label htmlFor="eveCarga">Carga horária:</label>
							<input type="text" />
						</section>

						<section>
							<label htmlFor="eveTurnos">Turno(s):</label>
							<select id="turnos">
								<option selected>selecione</option>
								<option>Manhã</option>
								<option>Tarde</option>
								<option>Noite</option>
								<option>Manhã e Tarde</option>
								<option>Manhã e Noite</option>
								<option>Tarde e Noite</option>
							</select>
						</section>
					</div>

					<h2>DADOS ADICIONAIS</h2>
					<div className='form-bloco'>
						<section>
							<label htmlFor="eveCategoria">Categoria do evento:</label>
							<select name="" id="categoria">
								<option value="">selecione</option>
								<option value="">Empreendedorismo</option>
								<option value="">Finanças</option>
								<option value="">Gestão de Custos</option>
								<option value="">Gestão Financeira</option>
								<option value="">Plano de Negócios</option>
								<option value="">Precificação</option>
								<option value="">Qualificação Profissional</option>
							</select>
						</section>

						<section>
							<label htmlFor="categoria">Valor de investimento:</label>
							<input type="text" placeholder='R$' />
						</section>
					</div>

					<section className='btn-cadastrar'>
						<button><img src="/src/images/icones/icone-cadastrar.png"/> SALVAR CADASTRO</button>
					</section>
				</form>
			</div>

		</div>
	)

}