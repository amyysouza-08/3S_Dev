// Crie um componente chamado Aluno que receba:
// nome
// curso
// imagem
// Exiba:
// A imagem do aluno
// O nome
// O curso
import "./Aluno.css";
const Aluno = ({ nome, curso, imagem }) =>{
    return(
        <div className="aluno">
            <img src={imagem} alt={nome} className="aluno-imagem" />
            <h2>{nome}</h2>
            <p>{curso}</p>
        </div>
    );
}
export default Aluno;