import './App.scss'
import './styles/text.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HeaderPage } from './pages/header'
import HomePage from './pages/home'
import AboutUs from './pages/o_nas'
import Catalog from './pages/catalog'
import Contacts from './pages/contacts'
import Delivery from './pages/dostavka'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderPage />
        <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/o_nas'} element={<AboutUs />} />
        <Route path={'/catalog'} element={<Catalog />} />
        <Route path={'/contacts'} element={<Contacts />} />
        <Route path={'/dostavka'} element={<Delivery />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
