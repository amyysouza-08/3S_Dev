import { useState } from "react";
import Contador from "./componentes/contador/contador";
import './App.css';
import CadFruta from "./componentes/cadFruta/cadFruta";
import CicloDeVida from "./componentes/ciclodevida/ciclodevida";


function App() {
  const [nome, setNome] = useState("Google")
  const [mostrar, setMostrar]= useState(true);


function mudarTexto() {
  setNome("Facebook")
}
function fuiAbandonado() {
  setNome("Input foi abandonado :")
}
  return(
    
  //<>
  //  <h1>{nome} Page</h1>
  // <button onClick={mudarTexto}>Mudar Texto</button>
  // <button onClick={() =>{
  //   return setNome("Amazon")
  // }}>Mudar Texto 2</button>

  // <br />

  // <input type="text" onBlur={fuiAbandonado} onChange={(e) => setNome (e.target.value)} />
  // <Contador />
  //   <br /><br />
  //   <p>Lorem ipsum <strong>{nome}</strong> dolor sit amet </p>
    // <CadFruta/>
    <>
  <button onClick={() => {setMostrar(!mostrar)}}> ON / OFF</button>
 {mostrar && <CicloDeVida/>}

 </>
  )
}
export default App;