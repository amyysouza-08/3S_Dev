import { useState, useContext } from "react";
import { ProdutoContext } from "../../context/ProdutoContext";

const CadastrarProduto = () => {
    const [novoProduto, setNovoProduto] = useState();
    const { listaProdutos, setListaProdutos } = useContext(ProdutoContext)

    return (
        <div>
            <h2>Cadastro de Produtos</h2>
            <input type="text"
                onChange={(e) => {
                    setNovoProduto(e.target.value)
                }} />
            <button onClick={() => {
                setListaProdutos([...listaProdutos, novoProduto]);
                setNovoProduto("")
                alert("Produto cadastrado com sucesso!")
            }}>Cadastrar</button>
            <p>Produto que sera cadastrado: {novoProduto}</p>
        </div>

    )
}
export default CadastrarProduto