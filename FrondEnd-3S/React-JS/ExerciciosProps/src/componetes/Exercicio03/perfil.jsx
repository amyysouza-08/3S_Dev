// Crie um componente chamado Perfil que receba:
// nome
// idade
// profissao
// O componente deve exibir os dados em formato de cartão.
import "./perfil.css";
const Perfil = ({ nome, idade, profissao }) => {
    return(
        <div className="perfil">
            <p>
                Nome: {nome} <br />
                Idade: {idade} <br />
                Profissão: {profissao}
            </p>
        </div>
    );
}
export default Perfil;