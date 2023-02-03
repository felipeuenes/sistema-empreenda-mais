import { Routes, Route} from 'react-router-dom'


import { Home } from '../pages/home'
import { Negocios } from '../pages/negocios/negocios'
import { Pessoas } from '../pages/pessoas/index'
import { CadNegocios } from '../pages/negocios/cadastro/negociosCad'
import { CadPessoas } from '../pages/pessoas/cadastro/pessoasCad'
import { ImpProto } from '../pages/protocolos/folha-protocolo/protocoloImp'
import { CadProtocolo } from '../pages/protocolos/protocoloCad'

import { Atendimento } from '../pages/atendimentos/index'
import { Eventos } from '../pages/eventos/App'
import { CadastroEvento } from '../pages/eventos/cadastro-eventos'
import { Cursos } from '../pages/cursos'
import { Mentorias } from '../pages/mentorias/index,'
import { Indicadores } from '../pages/indicadores'




export function AppRoutes() {
    return(
        <>
        <Routes>
            <Route path={'/'} element={<Home/>}></Route>
            <Route path={'/negocios'} element={<Negocios/>}></Route>
            <Route path={'/pessoas'} element={<Pessoas/>}></Route>
            <Route path={'/cadastro-negocios'} element={<CadNegocios/>}></Route>
            <Route path={'/cadastro-pessoas'} element={<CadPessoas/>}/>
            <Route path={'/registros'} element={<CadProtocolo/>}/>
            <Route path={'/imprimir'} element={<ImpProto/>}/>
            <Route path={'/eventos'} element={<Eventos/>}/>
            <Route path={'/cadastro-eventos'} element={<CadastroEvento/>}/>
            <Route path={'/atendimento'} element={<Atendimento/>}></Route>
            <Route path={'/cursos'} element={<Cursos/>}></Route>
            <Route path={'/mentorias'} element={<Mentorias/>}></Route>
            <Route path={'/indicadores'} element={<Indicadores/>}></Route>
        </Routes>
        </>
    )
}