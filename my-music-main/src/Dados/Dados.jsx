import { useEffect, useState } from "react";
import api from "../../services/services";

const Musicas = () => {

    // STATES
    const [nomeMusica, setNomeMusica] = useState("");
    const [nomeArtista, setNomeArtista] = useState("");
    const [listaMusicas, setListaMusicas] = useState([]);

    // BUSCAR MÚSICAS
    const buscarMusicas = async () => {

        try {

            const retornoAPI = await api.get("musicas");

            setListaMusicas(retornoAPI.data);

        } catch (error) {

            console.log(error);
        }
    };

    // CADASTRAR MÚSICA
    const cadastrarMusica = async () => {

        if (nomeMusica.trim() === "" || nomeArtista.trim() === "") {

            alert("Preencha todos os campos!");

            return;
        }

        const novaMusica = {
            nome: nomeMusica,
            artista: nomeArtista
        };

        try {

            await api.post("musicas", novaMusica);

            alert("Música cadastrada com sucesso!");

            setNomeMusica("");
            setNomeArtista("");

            buscarMusicas();

        } catch (error) {

            console.log(error);
        }
    };

    // EXCLUIR MÚSICA
    const excluirMusica = async (id) => {

        try {

            await api.delete(`musicas/${id}`);

            alert("Música excluída!");

            buscarMusicas();

        } catch (error) {

            console.log(error);
        }
    };

    // CICLO DE VIDA
    useEffect(() => {

        buscarMusicas();

    }, []);

    return (

        <div>

            <h1>Cadastro de Músicas</h1>

            <input
                type="text"
                placeholder="Nome da música"
                value={nomeMusica}
                onChange={(e) => setNomeMusica(e.target.value)}
            />

            <input
                type="text"
                placeholder="Nome do artista"
                value={nomeArtista}
                onChange={(e) => setNomeArtista(e.target.value)}
            />

            <button onClick={cadastrarMusica}>
                Cadastrar
            </button>

            <hr />

            <h2>Lista de Músicas</h2>

            {
                listaMusicas.map((item) => (

                    <div key={item.id}>

                        <p>
                            Música: {item.nome}
                        </p>

                        <p>
                            Artista: {item.artista}
                        </p>

                        <button onClick={() => excluirMusica(item.id)}>
                            Excluir
                        </button>

                        <hr />

                    </div>
                ))
            }

        </div>
    );
};

export default Musicas;