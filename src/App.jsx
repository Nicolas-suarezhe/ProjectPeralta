import { useState } from 'react'
import { HashRouter, Routes , Route} from 'react-router-dom'
import './App.css'
import Bares from './assets/components/Bares'
import Home from './assets/components/Home'
import Imperdibles from './assets/components/Imperdibles'
import OtroApartado1 from './assets/components/OtrosApartados/OtroApartado1'
import OtroApartado2 from './assets/components/OtrosApartados/OtroApartado2'
import OtroApartado3 from './assets/components/OtrosApartados/OtroApartado3'
import OtroApartado4 from './assets/components/OtrosApartados/OtroApartado4'
import Panaderias from './assets/components/Panaderias'
import Restaurantes from './assets/components/Restaurantes'
import SitiosInteres from './assets/components/SitiosInteres'

function App() {

  return (

    <div className="App">
      <HashRouter>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/restaurantes' element={<Restaurantes/>}/>
          <Route path='/panaderias' element={<Panaderias/>} />
          <Route path='/bares' element={<Bares/>} />
          <Route path='/sitiosinteres' element={<SitiosInteres/>} />
          <Route path='/imperdibles' element={<Imperdibles/>} />
          <Route path='/otroapartado1' element={<OtroApartado1/>} />
          <Route path='/otroapartado2' element={<OtroApartado2/>} />
          <Route path='/otroapartado3' element={<OtroApartado3/>} />
          <Route path='/otroapartado4' element={<OtroApartado4/>} />


        </Routes>
      </HashRouter>
    </div>

  )
}

export default App
