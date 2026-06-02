import MyComponet from "./componetes/children/mycomponet"
import Saudacao from "./componetes/Exercicio01/saudacao";
import Produto from "./componetes/Exercicio02/produto";
import Perfil from "./componetes/Exercicio03/perfil";
import Botao from "./componetes/Exercicio04/botao";
import Filme from "./componetes/Exercicio05/filme";
import people from "./assets/images(2).jpg";
import Aluno from "./componetes/Exercicio06/Aluno";
import { Card } from "./componetes/Exercicios07/card";
import Contato from "./componetes/Exercicio08/contato";
import Jogos from "./componetes/Exercicio09/jogo";
import mine from "./assets/minecraft.jpg";
import homem from "./assets/homem.jpg";
import free from "./assets/free.jpg";
import "./App.css";
import { Children } from "react";
const App = () => {
  return(
    // <MyComponet>
    // <Saudacao nome="Amy" />
    // <Saudacao nome="Livia" />
    // <Saudacao nome="Eloysa" />
    // </MyComponet>

    // <>
    // <Produto nome="Notebook" preco="2500,00" descricao="Notebook bom" />
    // <Produto nome="Livro" preco="50,00" descricao="Livro interessante" />
    // <Produto nome="Mouse" preco="100,00" descricao="Mouse top" />
    // </>

    // <>
    // < Perfil nome="Amy" idade="18" profissao="Desenvolvedora" />
    // < Perfil nome="Livia" idade="17" profissao="Desenvolvedora" />
    // < Perfil nome="Eloysa" idade="17" profissao="Desenvolvedora" />
    // </>

    // <Card>
    // <Botao texto="Botão verde" cor="verde" />
    // <Botao texto="Botão vermelho" cor="vermelho" />
    // </Card>

    // <>
    // <Filme titulo="Descendentes" ano="2015" genero="fantasia" nota="10" />
    // <Filme titulo="Crepusculo" ano="2008" genero="romance" nota="9" />
    // <Filme titulo="Gente Grande" ano="2010" genero="comedia" nota="10" />
    // </>

    // <>
    // <Aluno nome="John" 
    // curso="Engenharia" 
    // imagem={people} />
    // </>

    // <>
    // <Contato 
    //     nome="Lucas Pereira"
    //     email="lucas.pereira@example.com"
    //     telefone="(11) 98765-4321"
    //   />
    //   <Contato 
    //     nome="Mariana Costa"
    //     email="mariana.costa@example.com"
    //     telefone="(21) 91234-5678"
    //   />
    //   <Contato 
    //     nome="Rafael Souza"
    //     email="rafael.souza@example.com"
    //     telefone="(31) 99876-5432"
    //   />
    //   <Contato
    //     nome="Fernanda Lima"
    //     email="fernanda.lima@example.com"
    //     telefone="(41) 98765-4321"
    //   />
    //   <Contato
    //     nome="Gabriel Alves"
    //     email="gabriel.alves@example.com"
    //     telefone="(51) 98765-4321"
    //   />
    // </>
    
      // <>
      // <Jogo
      //   nome="Minecraft"
      //   plataforma="PC"
      //   preco={119.99}
      //   imagem={mine}
      // />
      // <Jogo
      //   nome="Homem-Aranha: Miles Morales"
      //   plataforma="PlayStation, PC"
      //   preco={199.99}
      //   imagem={homem}
      // />
      // <Jogo
      //   nome="Free Fire"
      //   plataforma="PC, Mobile"
      //   preco={249.99}
      //   imagem={free}
      // /> 

      // </>

      <>
      <ItemLoja
        nome="iPhone 17 Pro Max"
        preco="12,500"
        categoria="Eletrônicos"
        estoque={150}
      />

      <ItemLoja
        nome="MacBook Air M4"
        preco="7,246"
        categoria="Eletrônicos"
        estoque={50}
      />
      <ItemLoja
        nome="Apple Watch Series 10"
        preco="4,999"
        categoria="Eletrônicos"
        estoque={0}
      />
  </>
  );
}
export default App;