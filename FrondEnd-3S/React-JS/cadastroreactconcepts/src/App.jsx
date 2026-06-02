import './App.css'
import QuemSomosPage from './pages/quemsomos/quemsomospage'
import HomePage from './pages/home/homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './componentes/header/header'
import CadastroFrutasPage from './pages/cadastroFrutas/cadastrofrutaspage'
import  ProdutosPage  from './pages/produtos/produtospage'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<QuemSomosPage />} path='/quemsomospage' />
        <Route element={<CadastroFrutasPage />} path='/cadfrutas' />
        <Route element={<ProdutosPage />} path='/produtos' />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
