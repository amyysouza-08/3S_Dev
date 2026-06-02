import { useState } from "react"
import "./cadfruta.css"

 export default function CadFruta(){
    //states, funcoe e variaveis
    //state formulario
    const[fruta, setFruta] = useState("")
    const[quantidade, setQuantidade] = useState(0)
    const [arrFrutas, setArrFrutas] = useState([
        {id: 1, nome: "Banana", Quantidade:10 },
        {id: 2, nome: "Maçã", Quantidade: 20 },
    ]);

    function Cadastrar(e){
        e.preventDefault();

        setArrFrutas([
            ...arrFrutas,
            {id: Date.now(), nome: fruta, quantidade: quantidade}
        ])
        limparFormulario()
        return false;
    }
    function limparFormulario(){
        setFruta("")
        setQuantidade(0)
        
    }
    return(
        <section className="sessao-cadastro">
            <h1>Cadastro</h1>
            <form action="" method="post" onSubmit={Cadastrar} >
                
       
            <fieldset className="cadastro">
            <label htmlFor="fruta" 
                  className="cadastro__rotulo">Digite o nome da fruta</label>
                <br />
            <input type="text" 
                   id="fruta" 
                   className="cadastro__entrada"
                   placeholder="Digite o nome da fruta"
                   onChange={(e) =>{
                        setFruta(e.target.value)
                   }}
                    />

  

            <br />
            <label htmlFor="">{fruta}</label>
            <br />
            <label htmlFor="quantidade">Digite a quantidade</label>
            <br />
             <input type="number" 
                   id="quantidade" 
                   className="cadastro__entrada"
                   placeholder="Digite a quantidade"
                   onChange={(e) =>{
                        setQuantidade(e.target.value)
                   }}
                    />
            <br />
           <button type="submit"
                    className="cadastro__bnt-cadatrar"
                    // onClick={()=>{
                    //     return setArrFrutas([...arrFrutas,
                    //         {id: Date.now(), nome : fruta, quantidade: quantidade}
                    //     ])
                    // }}
                    >Cadastrar</button>
            </fieldset>
                 </form>
            <ul className="listagem">
                {arrFrutas.map((f) =>{
                
                    return <li key = {f.id}>
                                     Fruta: {f.fruta}
                                    {f.nome} | Quantidade: {f.quantidade}
                                  </li>
                })}
            </ul>
            </section>
    )
}