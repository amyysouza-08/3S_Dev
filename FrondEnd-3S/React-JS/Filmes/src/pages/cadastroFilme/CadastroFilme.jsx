import "./CadastroFilme.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import { useEffect, useState } from "react"
import api from "../../Services/services"
import Lista from "../../components/lista/Lista"
import Swal from 'sweetalert2'
import { Alerta } from "../../components/alerta/Alerta"

//REACTS E STATES
const CadastroFilme = () => {
    const [valor, setValor] = useState("");
    const [idEditar, setIdEditar] = useState("");
    const [editar, setEditar] = useState(false)
    const [listaFilmes, setListaFilmes] = useState([])
    const [listaGeneros, setListaGeneros] = useState([]);
    const [idGenero, setIdGenero] = useState("");
    const [imagem, setImagem] = useState(null);

//BUSCAR FILMES
const buscarFilmes = async () => {
        try {
            const retornoAPI = await api.get("api/Filme")
            console.log(retornoAPI.data)
            // Atualiza o state com os dados que voltaram da API
            setListaFilmes(retornoAPI.data)
        } catch (error) {
            console.log("Erro ao buscar os filmes:", error)
        }
    }


//BUSCAR GÊNEROS 
const buscarGeneros = async () => {
    try {

        const retornoAPI = await api.get("api/Genero");

        setListaGeneros(retornoAPI.data);

    } catch (error) {

        console.log(error);
    }
}

//CADASTRAR
const cadastrarFilme = async (e) => {

    e.preventDefault();

    if (valor.trim().length === 0) {

        Alerta({
            title:"Cadastro de Filme",
            text:"Filme deve ser preenchido antes de cadastrar!!",
            icon:"warning",
            confirmButtonText:"Ok"
        });

        return;
    }

    if (idGenero == "") {

        Alerta({
            title:"Cadastro de Filme",
            text:"Selecione um gênero!",
            icon:"warning",
            confirmButtonText:"Ok"
        });

        return;
    }

    const formData = new FormData();

    formData.append("Nome", valor);
    formData.append("IdGenero", idGenero);
    formData.append("Imagem", imagem);

    try {

        const retornoAPI = await api.post(
            "/api/Filme",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        );

        if (retornoAPI.status === 201) {

            await Swal.fire({
                title: "Sucesso!",
                text: "Filme cadastrado com sucesso!",
                icon: "success"
            });

            limparFormulario();
            buscarFilmes();

        }

    } catch (error) {

        console.log(error.response);

        Swal.fire({
            title: "Erro",
            text: "Erro ao cadastrar filme",
            icon: "error"
        });
    }
}

//LIMPAR FORMULÁRIO
const limparFormulario = () => {
        setValor("")
    }

//EXCLUIR
const excluirFilme = async (item) => {
        const result = await Swal.fire({
            title: "Cadastro de Filme",
            text: `Deseja realmente excluir este filme (${item.nome})?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar Exclusão',
            cancelButtonText: 'Cancelar',
        });
        if(!result.isConfirmed) {
            return false;
        }
        try {
            console.log(item)
            const retornoAPI = await api.delete(`api/Filme/${item.idFilme}`)

            // Opcional, mas recomendado: atualizar a lista após excluir também!
            if (retornoAPI.status === 200 || retornoAPI.status === 204) {
                console.log(retornoAPI);
                alert("Filme excluído com sucesso!")
                buscarFilmes();
            }
        } catch (error) {
            alert("Erro ao excluir filme!")
        }
    }

//PRÉ-EDITAR
const preEditar = (item) => {

    setIdEditar(item.idFilme);
    setValor(item.titulo);
    setEditar(true);

    console.log(item);
}

//EDITAR
const editarFilme = async (e) => {

    e.preventDefault();

    try {

        const formData = new FormData();

        formData.append("Nome", valor);
        formData.append("IdGenero", idGenero);

        const retornoAPI = await api.put(
            `api/Filme/${idEditar}`,
            formData
        );

        if (retornoAPI.status === 204) {

            await Swal.fire({
                title: "Sucesso!",
                text: "Filme editado com sucesso!",
                icon: "success",
                confirmButtonText: "Ok"
            });

            limparFormulario();
            buscarFilmes();
            setEditar(false);
        }

    } catch (error) {

        Swal.fire({
            title: "Erro",
            text: "Erro ao editar filme",
            icon: "error",
            confirmButtonText: "Ok"
        });
    }
}

//CANCELAR PRÉ-EDIÇÃO
const cancelarPreEditar = () => {
        setValor("")
        setEditar(false)
        setIdEditar(0)
      };

//USE EFFECT      
 useEffect(() => {

    buscarFilmes();
    buscarGeneros();

}, [])

//COMPONENTE
    return(
        <>
             <Header />
            <main>
               <Cadastro
                tituloCadastro="Cadastro de Filmes"
                placeholder="filme"
                valor={valor}
                setValor={setValor}
                idGenero={idGenero}
                setIdGenero={setIdGenero}
                listaGeneros={listaGeneros}
                cancelarEdicao={cancelarPreEditar}
                funcCadastro={editar ? editarFilme : cadastrarFilme}
                btnEditar={editar}
                ListaFilmes={listaFilmes}   
                setImagem={setImagem}
                />

                <Lista
                    tituloLista="Lista de Filmes"
                    // visibilidade="none"
                    // Chama o state atualizado:
                    lista={listaFilmes}
                    // Identifica o tipo de lista:
                    tipoLista="filme"
                    setEditar={setEditar}
                    setValor={setValor}
                    funcExcluir={excluirFilme}
                    funcEditar={preEditar}
                    

                />
            </main>
            <Footer />
        </>
    )
}
export default CadastroFilme