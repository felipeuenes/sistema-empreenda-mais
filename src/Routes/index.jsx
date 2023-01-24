import { Routes, Route} from 'react-router-dom'
import { Header } from '../components/Header/index'

import { Home } from '../pages/home/index.jsx'
import { Negocios } from '../pages/negocios/negocios'
import { Pessoas } from '../pages/pessoas/index'
import { CadNegocios } from '../pages/negocios/cadastro/negociosCad'
import { CadPessoas } from '../pages/pessoas/cadastro/pessoasCad'
import { ImpProto } from '../pages/protocolos/folha-protocolo/protocoloImp'
import { CadProtocolo } from '../pages/protocolos/protocoloCad'
import { ProtocoloFolha } from '../components/protocolo-folha/protocoloFolha'

import { Eventos } from '../pages/Eventos/App'
import { CadastroEvento } from '../pages/Eventos/Cadastro-eventos'

export function AppRoutes() {
    


    return(

        <>
        <Routes>
            <Route path={'/'} element={<Home/>}></Route>
            <Route path={'/negocios'} element={<Negocios/>}></Route>
            <Route path={'/pessoas'} element={<Pessoas/>}></Route>
            <Route path={'/cadastro-empreendimentos'} element={<CadNegocios/>}></Route>
            <Route path={'/cadaspessoa'} element={<CadPessoas/>}/>
            <Route path={'/protocolos'} element={<CadProtocolo/>}/>
            <Route path={'/imprimir'} element={<ImpProto/>}/>
            <Route path={'/eventos'} element={<Eventos/>}/>
            <Route path={'/cadasEvento'} element={<CadastroEvento/>}/>

        </Routes>
        </>
    )
}