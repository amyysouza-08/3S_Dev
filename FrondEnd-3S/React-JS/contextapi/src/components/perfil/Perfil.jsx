import { useContext, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const Perfil = () => {
    const { usuario, setUsuario } = useContext(UsuarioContext)
    const [novoUsuario, setNovoUsuario] = useState("")
    return (
        <div>
            <h2>Pagina Perfil ({usuario}) </h2>
            <input type="text"
                placeholder="Digite o novo usuario"
                onChange={(e) => {
                    setNovoUsuario(e.target.value)
                    console.log(novoUsuario)
                }} />
            <button onClick={() => {
                setUsuario(novoUsuario)
            }}>Trocar Usuario</button>
            <p>Novo Usuario: <strong>{novoUsuario}</strong></p>
        </div>
    )
}
export default Perfil