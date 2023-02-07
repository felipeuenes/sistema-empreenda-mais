//PROTOCOLO > CADASTRO > PÁGINA
import { useState } from 'react'
import './protocoloCad.css'
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';
import { TabPane } from 'rc-tabs/lib/TabPanelList/TabPane';
import { GlobalVariables } from '../../global';
import { Input, Select } from 'antd'


export function CadProtocolo() {

	const [formProto, setFormProto] = useState({})



	async function handleSubmit(event) {
		event.preventDefault();

		const { nome, data, nomeEmpre, atendimento, refere, obs } = event.target;

		const ProtoUser = {
			nome: nome.value,
			data: data.value,
			NomedaEmpresa: nomeEmpre.value,
			atendimento: atendimento.value,
			protocolo: data.value + atendimento.value,
			refere: refere.value,
			obs: obs.value,

		}

		setFormProto(ProtoUser)
		GlobalVariables.pessoa = ProtoUser;


		console.log(ProtoUser);
	}


	return (
		<div className='container'>
			<h1>Registros</h1>
			<Tabs defaultActiveKey='1' id='tabs' type='card'>
				<TabPane key={1} tab='Protocolos' className='abas'>
					<form action="" onSubmit={handleSubmit}>
						<div className='block'>

							<section>
								<label htmlFor="interacao">Tipo de interação:</label>
								<Select defaultValue="Selecione" required listItemHeight={10} listHeight={250}
									style={{ width: 300, }}
									options={[
										{
											label: 'Visitas (cód. 150)',
											options: [
												{ value: '150', label: "Acompanhamento" },
												{ value: '150', label: "Mobilização" },
												{ value: '150', label: "Ações diversas" },
											],
										},
                    				{
											label: 'Serviços (cód. 250)',
											options: [
												{ value: '250', label: "Orientações gerais" },
												{ value: '250', label: "Abertura de empresa" },
												{ value: '250', label: "Alteração cadastral" },
												{ value: '250', label: "Baixa de empresa" },
												{ value: '250', label: "CCMEI/Cartão CNPJ" },
												{ value: '250', label: "Conta GOV.BR" },
												{ value: '250', label: "DAS: Emissão/atualização" },
												{ value: '250', label: "DAS: Parcelamento/parcelas" },
												{ value: '250', label: "DASN: Declaração Anual do MEI" },		
												{ value: '250', label: "Desburocratização" },
												{ value: '250', label: "Orientação ao crédito" },
												{ value: '250', label: "Envio/recebimento de currículos" },	
												
											],
										},
										{
											label: 'Documentos (cód. 350)',
											options: [
												{ value: '350', label: "Adesão (ambiente interno)" },
												{ value: '350', label: "Assinaturas diversas" },
											]
										},
									]}
								/>
							</section>


							<section>
								<label htmlFor="tipo">Tipo de protocolo:</label>
								<input type="text" name="nome" id="nome" placeholder='Nome...' />
							</section>
							<section>
								<label htmlFor="nome">Nome da pessoa:</label>
								<input type="text" name="nome" id="nome" placeholder='Nome...' />
							</section>
							<section>
								<label htmlFor="data">Data do atendimento</label>
								<input type="date" name="data" id="data" />
							</section>
							<section>
								<label htmlFor="nomeEmpresa">Nome da Empresa:</label>
								<input type="text" name="nomeEmpre" id="nomeEmpresa" placeholder='Nome da empresa...' />
							</section>




						</div>
						<div className='block3'>

							<section>
								<label htmlFor="atendimento">Tipo de atendimento:</label>
								<select name="atendimento" id="atendimento">
									<option value="150">Visitas em geral</option>
									<option value="250">Atendimento para prestação de serviço</option>
									<option value="350">Assinatura de documento em ambiente interno</option>
									<option value="450">Consultorias, mentorias, visitas da gerente do Empreenda Mais</option>
									<option value="550">Acompanhamento de especialistas ou parceiros - mentorias ou consultorias</option>
									<option value="650">Palestras, oficinas, outros...</option>
								</select>
							</section>
							<section>
								<label htmlFor="refere">Refere-se a:</label>
								<textarea name="refere" id="refere" cols="50" rows="8"></textarea>
							</section>
							<section>
								<label htmlFor="obs">Observações:</label>
								<textarea name="obs" id="obs" cols="50" rows="8"></textarea>
							</section>
						</div>

						<div className='block2'>
							<section>
								<button className='botaoGerar' type='submit'>GERAR</button>
								<Link to="/imprimir">
									<button className='botaoGerar'>Imprimir</button>
								</Link>
							</section>
						</div>




					</form>
					{console.log(formProto)}
				</TabPane>
			</Tabs>
		</div>
	)
}


