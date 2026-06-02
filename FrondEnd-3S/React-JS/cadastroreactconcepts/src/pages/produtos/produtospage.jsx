import "./produtospage.css"
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProdutosPage() {


    const [produto, setProduto] = useState("")
    const [descricao, setDescricao] = useState("")
    const [imagem, setImagem] = useState("")
    const [preco, setPreco] = useState(0)
    const [arrayProduto, setArrayProduto] = useState([])
    const [editar, setEditar] = useState(false)
    const [id, setId] = useState(0)

    async function getDados() {
        try {
            const retornoAPI = await axios.get("http://localhost:3000/produtos")

            console.log(retornoAPI)

            const dados = await retornoAPI.data

            setArrayProduto(dados)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDados()
    }, [])

    async function cadastrarProduto(e) {

        e.preventDefault()

        if (descricao === "" || produto === "" || preco < 0 || isNaN(preco) || imagem === "") {
            alert("Preencha todos os campos corretamente")
            return false
        }


        try {
            const retornoAPI = await axios.post('http://localhost:3000/produtos', {
                produto: produto,
                descricao: descricao,
                preco: preco,
                imagem: imagem
            }
            )
            console.log(retornoAPI);
            if (retornoAPI.status == 201) {


                const produtoCadastrado = await retornoAPI.data
                setArrayProduto([...arrayProduto, produtoCadastrado])

                getDados()
                limparCampos()
                setEditar(false)
            } else {
                alert("Erro ao recarregar os dados")
            }
        } catch (error) {
            alert("Deu erro ao alterar os dados,possivel servidor fora do ar")
        }
    }

    function limparCampos() {
        setProduto("")
        setDescricao("")
        setPreco(0)
        setId(0)

    }
    const deletar = async (id) => {

        await axios.delete(`http://localhost:3000/produtos/${id}`)
        getDados();
    }

    const editarProduto =async (id) => {
        setId(produto.id)
        setProduto(produto.produto)
        setDescricao(produto.descricao)
        setPreco(produto.preco)
        setImagem(produto.imagem)

    }
    }
    return (
        <>
            <h1>Cadastro</h1>

            <form action="" method="post"
                onSubmit={editar ? editarProduto : cadastrarProduto}
                className="secao-cadastro">
                <fieldset className="cadastro">
                    <div>
                        <label htmlFor="produto">Nome:</label>
                        <input

                            type="text"
                            id="produto"
                            value={produto}
                            className="cadastro__entrada"
                            onChange={(e) => setProduto(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="descricao">Descricao:</label>
                        <input
                            type="text"
                            id="descricao"
                            value={descricao}
                            className="cadastro__entrada"
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="preco">Preco:</label>
                        <input
                            type="text"
                            id="preco"
                            value={isNaN(preco) ? 0 : preco}
                            className="cadastro__entrada"
                            onChange={(e) => setPreco(parseFloat(e.target.value))}
                        />
                    </div>

                    <div>
                        <label htmlFor="imagem">Imagem:</label>
                        <input
                            type="text"
                            id="imagem"
                            value={imagem}
                            className="cadastro__entrada"
                            onChange={(e) => setImagem(e.target.value)}
                        />
                    </div>

                    <button type="submit"
                        className="cadastro__btn-cadastrar">Cadastrar</button>
                </fieldset>

                <section className="secao-produtos">
                    {arrayProduto.map((p) => {
                        return (
                            <figure key={p.id} className="card-produto">
                                <img
                                    src={`/public/imagens/${p.imagem}.jpg`}
                                    alt={p.nome}
                                    width="150"
                                />
                                <p><strong>{p.nome}</strong></p>
                                <p>Preço:{(p.preco).toFixed(2)}</p>
                                <p>Descrição:</p>
                                <p>{p.descricao}</p>

                                <button onClick={(e) => {e.preventDefault(); deletar(p.id)}}>Apagar</button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setEditar(true)
                                        setProduto(p.titulo)
                                        setDescricao(p.descricao)
                                        setPreco(p.preco)
                                        setId(p.Id)
                                    }}>Editar</button>

                                <button type="submit"
                                    className="cadastro__btn-cadastrar">Cadastrar</button>

                            </figure>
                        )
                    })}
                </section>


            </form>
        </>

    )
