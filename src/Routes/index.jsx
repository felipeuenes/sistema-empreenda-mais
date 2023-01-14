import { Routes, Route} from 'react-router-dom'
import { Header } from '../components/Header'

import { Home } from '../pages/Home/App'
import { Empreendimentos } from '../pages/Empreendimentos/App'
import { Pessoas } from '../pages/Pessoas/App'
import { CadastroEmpre } from '../pages/Empreendimentos/Cadastro-empreendimentos'
import { CadasPessoas } from '../pages/Pessoas/Cadastro-pessoas'


export function AppRoutes() {
    


    return(

        <>
        <Routes>
            <Route path={'/'} element={<Home/>}></Route>
            <Route path={'/empreendimentos'} element={<Empreendimentos/>}></Route>
            <Route path={'/pessoas'} element={<Pessoas/>}></Route>
            <Route path={'/cadastro-empreendimentos'} element={<CadastroEmpre/>}></Route>
            <Route path={'/cadaspessoa'} element={<CadasPessoas/>}/>

        </Routes>
        </>
    )
}