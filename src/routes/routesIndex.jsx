//ROTAS > 
import { Routes, Route} from 'react-router-dom'

import { Home } from        '../pages/home/home.jsx'
import { CadNegocios } from   '../pages/negocios/cadastro/negociosCad.jsx'
import { ListaNegocios } from '../pages/negocios/negociosLista.jsx'
import { CadPessoas } from    '../pages/pessoas/cadastro/pessoasCad.jsx'
import { ListaPessoas } from  '../pages/pessoas/pessoasLista.jsx'
import { CadProtocolo } from '../pages/protocolos/cadastro/protocoloCad.jsx'
import { ProtocoloFolha } from '../components/protocolo-folha/protocoloFolha.jsx'
// import { ProtocoloImp } from '../pages/Protocolos/ProtocoloImpressao/App'

export function AppRoutes() {
    


    return(

        <>
        <Routes>
            <Route path={'/'} element={<Home/>}></Route>
            <Route path={'/lista-negocios'} element={<ListaNegocios/>}></Route>
            <Route path={'/lista-pessoas'} element={<ListaPessoas/>}></Route>
            <Route path={'/cadastro-negocios'} element={<CadNegocios/>}></Route>
            <Route path={'/cadastro-pessoas'} element={<CadPessoas/>}/>
            <Route path={'/cadastro-protocolos'} element={<CadProtocolo/>}/>
            <Route path={'/imprimir-protocolo'} element={<ProtocoloFolha/>}/>

        </Routes>
        </>
    )
}