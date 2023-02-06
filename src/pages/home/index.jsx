//INÍCIO > PÁGINA
import { List } from '../../components/listas'
import { Tabs } from 'antd';
import TabPane from 'rc-tabs/lib/TabPanelList/TabPane';
import './home.css'

export function Home() {
	return (
		<div className='container'>
			<Tabs defaultActiveKey='1'>
				<TabPane className='abas' tab='LISTAGEM' key={1}>
					<List />
				</TabPane>
				

				<TabPane className='abas' tab='ESTATÍSTICAS' key={2}>
				<div className="abasConteudo" id="Estatisticas" >
					<div className='subContainer'>
						<h2 id='icon'>ACESSO RÁPIDO</h2>
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
				</div>
				</TabPane>
			</Tabs>
		</div>
	)
}


