import"./cardperfil.css";
import people from "../../assets/react.svg";
function CardPerfil() {
    return(
    <div className="card-perfil">
        <img className="card-perfil__img" 
        src={people} 
        alt="imagem de perfil do usuario"/>
    </div>
    );
}
export default CardPerfil;

//Reactsjs
//componentes
//podem receber dados como parametros(props)
//separar os componentes e montar nossa interface
//com os componenetes reutilizaveis
