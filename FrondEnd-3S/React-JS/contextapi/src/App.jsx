import './App.css'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/home/Home'
import Perfil from './components/perfil/perfil'
import Header from './components/header/Header'
import Produto from './components/produto/Produto'
import ListarProduto from './components/listarProduto/ListarProduto'
import CadastrarProduto from './components/cadastrarProduto/CadastrarProduto'
import PrivateRoute from './routes/PrivateRoute'


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        
        <Route path="/produto" 
        element={
           <PrivateRoute>
            <Produto />
          </PrivateRoute>
          } 
          />

        <Route path="/cadastrarProdutos" 
        element={
          <PrivateRoute>
            <CadastrarProduto />
          </PrivateRoute>
        } 
        />

        <Route path="/listarProdutos" 
        element={
           <PrivateRoute>
            <ListarProduto />
          </PrivateRoute>
          } 
          />

        
      </Routes>
    </BrowserRouter>
  )
}

export default App
