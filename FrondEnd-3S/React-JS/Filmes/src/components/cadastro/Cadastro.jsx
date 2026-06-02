import "./Cadastro.css";
import Botao from "../botao/Botao";
// Destructuring nas props:
// const Cadastro = ({ 
//     cadastro, tituloCadastro, valor, setValor, estilo, 
//     valorSelect, setValorSelect, listaGeneros 
//   }) => {}
  

const Cadastro = (props) => {
    return (
        <section className="section_cadastro">
            <form className="layout_grid form_cadastro">
                <h1>{props.tituloCadastro}</h1>
                <hr />
                <div className="campos_cadastro">
                    <div className="campo_cad_nome">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" placeholder={`Digite o nome do ${props.placeholder}`} 
                        //O valor do input vem de props (estado do componente pai)
                        value={props.valor}
                        // Atualiza o estado do pai ao digitar
                        onChange={(e) => props.setValor(e.target.value)}
                        />
                    </div>
                    <div className="campo_cad_genero" style={{ display: props.visibilidade }}>
                        <label htmlFor="genero">Gênero</label>
                        <select value={props.idGenero}onChange={(e) => props.setIdGenero(e.target.value)}>
                            <option value="">Selecione</option>
                            {props.listaGeneros.map((item) => (
                            <option key={item.idGenero}value={item.idGenero} >{item.nome} </option>
                   ))}
                        </select>
                    </div>
                    <div className="campo_cad_genero" style={{ display: props.visibilidade }}>
                       <label htmlFor="imagem" className="label_imagem">Selecionar Imagem</label>
                       <input className="input_imagem" type="file" id="imagem" onChange={(e) => props.setImagem(e.target.files[0])} style={{ display: "none" }}/>
                    </div>


                    {props.btnEditar &&
                    <Botao
                    nomeDoBotao="Cancelar"
                    funcBotao={props.cancelarEdicao}
                    btnEditar={props.btnEditar}
                    />}

                    <Botao nomeDoBotao="Cadastrar" funcBotao={(e) => props.funcCadastro(e)} />
                </div>
            </form>
        </section>
    )
}

export default Cadastro;