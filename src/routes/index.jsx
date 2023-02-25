import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { DefaultPage } from '../defaultPage'
import Global from '../styles/global'

export const RouterComponent = () => {
    return (
        <BrowserRouter>
                <Routes>
                     <Route path='/' element={<DefaultPage />} >
                        <Route path='/' element={<Home />}/>
                     </Route>
                </Routes>
                <Global />
        </BrowserRouter>
    )
}