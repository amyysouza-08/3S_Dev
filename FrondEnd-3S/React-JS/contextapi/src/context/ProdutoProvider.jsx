import { useState } from "react"
import { ProdutoContext } from "./ProdutoContext"

export const ProdutoProvider = ({children}) => {
    const [listaProdutos, setListaProdutos] = useState(["Xaiomi"])
    return(
        <ProdutoContext.Provider
        value={{listaProdutos, setListaProdutos}}
        >
           {children}
        </ProdutoContext.Provider>
    )
}
