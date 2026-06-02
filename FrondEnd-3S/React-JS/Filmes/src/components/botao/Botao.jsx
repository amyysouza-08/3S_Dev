import "./Botao.css"

const Botao = (props) => {
    return(

        <button //type={props.btnEditar ? "button" : "submit"}
         className="botao" 
         onClick={(e) => props.funcBotao(e)}>
            {props.nomeDoBotao}</button>

    )
}

export default Botao;