import Paragrafo from './components/paragrafo/paragrafo';
import Title from './components/paragrafo/title/title';
import './App.css'

function App() {
  return (
    <>
      <Title nome = "Amy" sobrenome = "Souza" texto="Bem Vindo, sou o Titulo" />
      <Title texto="Eu sou outro Titulo" />
      <Paragrafo textoParagrafo="Eu sou o Paragrafo" />
     </>
  );
}
export default App
