//INÍCIO > PÁGINA
import './home.css'
// import { Progress, Scape } from 'antd'
import { Progress, Space } from 'antd'



export function Home() {


	return (
		<div className='containerHome'>
			<h1>SISTEMA E+</h1>
			<div className='subContainer'>
				<h2 id='icon'><img src="/src/images/estrela.png" id='icone-pagina'/>ACESSO RÁPIDO</h2>
				<section id='acessoRelatorio'>
					<h3>RELATÓRIOS</h3>
					<button>GERAL</button>
					<button>PESSOAS</button>
					<button>NEGÓCIOS</button>
					<button>EVENTOS</button>
					<button>CURSOS</button>
					<button>MENTORIAS</button>
					<button>REGISTROS</button>
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

	)
}


