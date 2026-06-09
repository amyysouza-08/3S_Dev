import { useEffect, useState } from "react"
import { UsuarioContext } from "./EmailContext"

export const EmailProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null)
    useEffect(() => {
        const usuarioLogado = JSON.parse(localStorage.getItem("usuario"))
        setUsuario(usuarioLogado)
    },[])

    return(
        <EmailContext.Provider
        value={{usuario, setUsuario}}
        >
           {children}
        </EmailContext.Provider>
    )
}
