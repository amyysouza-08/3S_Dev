import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import CadastroFilme from "../pages/cadastroFilme/cadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/cadastroGenero"
import Login from "../pages/login/Login"
import PrivateRoute from "./PrivateRoute"

const Rotas = ()=> {
    return(
        <BrowserRouter>
        <Routes>
            <Route element= {<Login />} path= "/"/>
            <Route element= {
                <PrivateRoute>
                    <CadastroFilme />
                </PrivateRoute>
                } path= "/filmes"/>
            <Route element= {
                <PrivateRoute>
                    <CadastroGenero />
                </PrivateRoute>
                } path= "/generos"/>
        </Routes>
        </BrowserRouter>
    )
}
export default Rotas