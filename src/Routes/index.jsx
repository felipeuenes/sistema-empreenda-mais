import { Routes, Route} from 'react-router-dom'
import { Header } from '../components/Header'

import { Home } from '../pages/Home/home.jsx'
import { Negocios } from '../pages/negocios/negocios'
import { Pessoas } from '../pages/Pessoas/pessoas'
import { CadastroEmpre } from '../pages/negocios/cadastro/negociosCad'
import { CadasPessoas } from '../pages/Pessoas/pessoas'
import { Proto } from '../pages/Protocolos/protocoloImp'
// import { ProtoImpri } from '../pages/Protocolos/ProtocoloImpressao/App'
import { Folha } from '../components/protocolo-folha/protocoloFolha'

import { Eventos } from '../pages/Eventos/App'
import { CadastroEvento } from '../pages/Eventos/Cadastro-eventos'

export function AppRoutes() {
    


    return(

        <>
        <Routes>
            <Route path={'/'} element={<Home/>}></Route>
            <Route path={'/negocios'} element={<Negocios/>}></Route>
            <Route path={'/pessoas'} element={<Pessoas/>}></Route>
            <Route path={'/cadastro-empreendimentos'} element={<CadastroEmpre/>}></Route>
            <Route path={'/cadaspessoa'} element={<CadasPessoas/>}/>
            <Route path={'/protocolos'} element={<Proto/>}/>
            <Route path={'/imprimir'} element={<Folha/>}/>
            <Route path={'/eventos'} element={<Eventos/>}/>
            <Route path={'/cadasEvento'} element={<CadastroEvento/>}/>

        </Routes>
        </>
    )
}