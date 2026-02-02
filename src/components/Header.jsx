import "./Header.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Whisker from "../assets/whisker2.webp";
import Button from "./Button.jsx";

export default function Header() {
  // Cierra el menú hamburguesa (desmarca el checkbox)
  const closeMenu = () => {
    const toggle = document.getElementById("menu-toggle");
    if (toggle) toggle.checked = false;
  };

  return (
    <header className="header">{/*el header suele ocupar todo el ancho, pero el contenido no. header → fondo, borde, blur, sticky, etc. header__inner → ancho máximo, centrado, alineaciones.*/}
      <div className="header__inner">{/*contenedor interno del header, para centrar y limitar el ancho del contenido: header__inner controla: el ancho máximo, el centrado y la distribución interna (logo / nav / botón)*/}
        {/*<Link to="/" className="header__logo" href="#top" aria-label="Ir al inicio"> ---Enlace que envuelve el logo, para que al hacer click en el logo, te lleve al inicio de la página. href="#top"-->“Cuando hagas click aquí, ve al punto top de la página”.
        <img src={Whisker} alt="Logo Whisker" className="header__logoImg"/></Link>*/}

      <Link
        to="/" className="header__logo" aria-label="Ir al inicio" onClick={closeMenu}>
        <img src={Whisker} alt="Logo Whisker" className="header__logoImg"/>
      </Link>
      
      {/*<img
            src={Whisker} --> ruta de la imagen del logo, que hemos importado arriba con import Whisker from "../assets/logo_whisker.jpg";
            alt="Logo Whisker" --> texto alternativo de la imagen del logo
            className="header__logoImg" --> clase para dar estilo a la imagen del logo*/}

      {/*MENÚ HAMBURGUESA MÓVIL*/}
      
      {/*Este input NO se ve. Solo sirve para guardar el estado: marcado → menú abierto, desmarcado → menú cerrado*/}
        <input type="checkbox" id="menu-toggle" className="menu-toggle"/>

        {/*Label asociado al checkbox. Al hacer click aquí, se marca/desmarca el input. Visualmente es el botón hamburguesa.*/}
        <label htmlFor="menu-toggle" className="menu-label" aria-label="Abrir menú">
        {/*Las tres rayas del menú hamburguesa.Son tres spans dibujados con CSS*/}
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </label>

        <nav className="header__nav">
          <NavLink to="/" onClick={closeMenu}>Inicio</NavLink>
          <NavLink to="/gatos" onClick={closeMenu}>Gatos</NavLink>
          <NavLink to="/adoptar" onClick={closeMenu}>Adoptar</NavLink>
          <NavLink to="/donar" onClick={closeMenu}>Donar</NavLink>
          <NavLink to="/contacto" onClick={closeMenu}>Contacto</NavLink>
          <NavLink className="header__ctaMobile" to="/login" onClick={closeMenu}>Iniciar sesión</NavLink>
        </nav>

        {/* Este botón NO forma parte del menú hamburguesa (desktop), pero si lo pulsas en móvil también puedes cerrar */}
        <Button className="header__cta" to="/login" onClick={closeMenu}>Iniciar sesión</Button>
      </div>
    </header>
  );
}
