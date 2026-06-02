import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import "./CadastroGenero.css"
import Cadastro from "../../components/cadastro/Cadastro"
import { useEffect, useState } from "react"
import api from "../../Services/services"
import Lista from "../../components/lista/Lista"
import Swal from 'sweetalert2'
import { Alerta } from "../../components/alerta/Alerta"

const CadastroGenero = () => {
    // states e variáveis
    const [valor, setValor] = useState("");
    const [idEditar, setIdEditar] = useState("");

    const [editar, setEditar] = useState(false)
    const [listaGeneros, setListaGeneros] = useState([])

  
    const buscarGeneros = async () => {
        try {
            const retornoAPI = await api.get("api/Genero")
            // Atualiza o state com os dados que voltaram da API
            setListaGeneros(retornoAPI.data)
        } catch (error) {
            console.log("Erro ao buscar os gêneros:", error)
        }
    }
    // ciclo de vida e funções
    const cadastrarGenero = async (e) => {
    e.preventDefault();

    const result = await Swal.fire({
        title: "Cadastro de Gênero",
        text: `Deseja realmente cadastrar este gênero (${valor})?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar Cadastro',
        cancelButtonText: 'Cancelar',
    });

    // VERIFICA SE CONFIRMOU
    if (!result.isConfirmed) {
        return;
    }

    if (valor.trim().length === 0) {
        Alerta({
            title:"Cadastro de Gênero",
            text:"Gênero deve ser preenchido antes de cadastrar!!",
            icon:"warning",
            confirmButtonText:"Ok"
        });

        return;
    }

    const objCadastro = {
        nome: valor
    };

    try {
    const retornoAPI = await api.post("/api/Genero", objCadastro);

        if (retornoAPI.status === 201) {

            await Swal.fire({
                title: "Sucesso!",
                text: "Gênero cadastrado com sucesso!",
                icon: "success"
            });

            limparFormulario();
            buscarGeneros();

        } else {

            Swal.fire({
                title: "Erro",
                text: "Houve algum problema ao cadastrar!",
                icon: "error"
            });
        }

    } catch (error) {

        Swal.fire({
            title: "Erro",
            text: "Erro na chamada da API",
            icon: "error"
        });
    }
}

    const limparFormulario = () => {
        setValor("")
    }

    const excluirGenero = async (item) => {
        const result = await Swal.fire({
            title: "Cadastro de Gênero",
            text: `Deseja realmente excluir este gênero (${item.nome})?`,
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
            const retornoAPI = await api.delete(`api/Genero/${item.idGenero}`)

            // Opcional, mas recomendado: atualizar a lista após excluir também!
            if (retornoAPI.status === 200 || retornoAPI.status === 204) {
                console.log(retornoAPI);
                alert("Gênero excluído com sucesso!")
                buscarGeneros();
            }
        } catch (error) {
            return
        }
    }

    const preEditar = (item) => {

        setIdEditar(item.idGenero);
        setValor(item.nome);
        setEditar(true);
        console.log(item)
        console.log(item.idGenero)
    }

    const editarGenero = async (e) => {
        e.preventDefault();
        try {

            const objEditar = {
            nome: valor
        }
            console.log(objEditar)
           
            const retornoAPI = await api.put(`api/Genero/${idEditar}`, objEditar)
            if (retornoAPI.status == 200) {
                alert("Gênero editado com sucesso")
                limparFormulario()
                buscarGeneros()
            } 
        } catch (error) {
            alert("Erro na chamada da api")
        }
    }
    const cancelarPreEditar = () => {
        setValor("")
        setEditar(false)
        setIdEditar(0)
      };

    // CHAMA A FUNÇÃO QUANDO O COMPONENTE É MONTADO NA TELA
    useEffect(() => {
        buscarGeneros()
    }, [])

    // o jsx
    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Gêneros"
                    visibilidade="none"
                    placeholder="gênero"
                    // state
                    valor={valor}
                    cancelarEdicao={cancelarPreEditar}
                    // função que muda o state
                    setValor={setValor}
                    funcCadastro={editar ? editarGenero : cadastrarGenero}
                    btnEditar={editar}

                />

                <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"
                    // Chama o state atualizado:
                    lista={listaGeneros}
                    // Identifica o tipo de lista:
                    tipoLista="genero"
                    setEditar={setEditar}
                    setValor={setValor}
                    funcExcluir={excluirGenero}
                    funcEditar={preEditar}

                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroGenero