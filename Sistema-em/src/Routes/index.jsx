import { Routes, Route} from 'react-router-dom'
import { Header } from '../components/Header'
import { App } from '../pages/App'

export function AppRoutes() {
    


    return(

        <>
        <Routes>
            <Route path={'/'} element={<App/>}></Route>
           
        </Routes>
        </>
    )
}