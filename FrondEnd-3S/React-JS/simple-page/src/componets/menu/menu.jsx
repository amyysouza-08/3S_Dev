 import CardPerfil from '../cardperfil/cardperfil';
import './menu.css';
 function Menu() {
    return (
        <nav class="menu"> 
        <a href="#" className="menu_filho">Home</a>
        <a href="#"className="menu_filho">Quem somos</a>
        <a href="#"className="menu_filho">Contato</a>
        <a href="#" className="menu_item menu__item--success">Entrar</a>
        <a href="#" className="menu_item menu__item--button-default">Cadastrar</a>
      <CardPerfil/>   
    </nav>
    );
 }
export default Menu; 
 