import './App.css'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/home/Home'
import Perfil from './components/perfil/perfil'
import Header from './components/header/Header'
import Produto from './components/produto/Produto'
import ListarProduto from './components/listarProduto/ListarProduto'
import CadastrarProduto from './components/cadastrarProduto/CadastrarProduto'


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/listarProdutos" element={<ListarProduto />} />
        <Route path="/cadastrarProdutos" element={<CadastrarProduto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
