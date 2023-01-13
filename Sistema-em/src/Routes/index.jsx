import { Routes, Route} from 'react-router-dom'
import { Header } from '../components/Header'

import { Home } from '../pages/Home/App'
import { Empreendimentos } from '../pages/Empreendimentos/App'
export function AppRoutes() {
    


    return(

        <>
        <Routes>
            <Route path={'/'} element={<Home/>}></Route>
            <Route path={'/empreendimentos'} element={<Empreendimentos/>}></Route>
           
        </Routes>
        </>
    )
}