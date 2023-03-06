import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { DefaultPage } from '../defaultPage'

import { About } from './about'

export const RouterComponent = () => {
    return (
        <BrowserRouter>
                <Routes>
                     <Route path='/' element={<DefaultPage />} >
                        <Route path='/' element={<Home />}/>
                        <Route path='/about' element={<About />}/>
                     </Route>
                </Routes>
        </BrowserRouter>
    )
}