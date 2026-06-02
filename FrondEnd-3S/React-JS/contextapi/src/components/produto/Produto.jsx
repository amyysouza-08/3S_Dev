import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

export const Produto = () => {
    const {usuario} = useContext(UsuarioContext)
    return(
        <>
        <h2>Pagina Produto</h2>
        <p>Bem vindo, {usuario}!</p>
        </>
    )
}

export default Produto