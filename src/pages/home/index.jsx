//INÍCIO > PÁGINA
import './home.css'
import '../../index.css'
import { List } from '../../components/listas/listas'
import { Divider } from 'antd'
import { Button } from 'antd/es/radio'

export function Home() {
	return (
		<div className='container'>
			<div id='containerHandle'>
				<div className='subContainer'>
					<h2>ACESSO RÁPIDO</h2>
					<section id='acessoRelatorio'>
						<h3>RELATÓRIOS</h3>
						<Button>GERAL</Button>
						<Button>PESSOAS</Button>
						<Button>NEGÓCIOS</Button>
						<Button>EVENTOS</Button>
						<Button>CURSOS</Button>
						<Button>MENTORIAS</Button>
						<Button>REGISTROS</Button>
					</section>
				</div>

				<div className='subContainer'>
					<h2>ESTATÍSTICAS</h2>
					<section>
						<h3>SITUAÇÃO DOS EMPREENDEDORES</h3>

						<table>
							<thead>
								<td>
									<tr>SITUAÇÃO DOS EMPREENDEDORES</tr>
									<tr>GERAL:</tr>
									<tr>BAIXIO DA DONANA:</tr>
									<tr>CANAFÍSTULA:</tr>
									<tr>MEL:</tr>
									<tr>MONTENEGRO:</tr>
									<tr>POÇO GRANDE:</tr>
									<tr>SÃO PEDRO DO NORTE:</tr>
									<tr>SEDE DE JUCÁS:</tr>
								</td>
							</thead>
						</table>

					</section>
				</div>

				<div className='cont-estatisticas'>
					<section id='sectionEstatisticas'>
						<h2>PARTICIPANTES DO PROGRAMA:</h2>
						<p id='variavelNumbers'>188</p>
					</section>
				</div>
				<div className='cont-estatisticas2'>
					<section id='sectionEstatisticas2'>
						<h2>
							MEI's
						</h2>
						<p id='variavelNumbers'>63</p>
					</section>
					<section id='sectionEstatisticas2'>
						<h2>ME's</h2>
						<p id='variavelNumbers'>41</p>
					</section>
					<section id='sectionEstatisticas2'>
						<h2>EPP's</h2>
						<p id='variavelNumbers'>3</p>
					</section>
				</div>
			</div>
			<Divider/>
			<List />
		</div>
	)
}


