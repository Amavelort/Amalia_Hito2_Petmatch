import "./Button.css";
import { Link } from "react-router-dom";

/*Botón reutilizable:
- Si pasas `to`, renderiza un <Link> (navegación interna con React Router).
- Si pasas `href`, renderiza un <a> (anclas tipo #login o enlaces externos).
- Si no pasas nada, renderiza un <button>.
- La clase base es "btn" (estilos del botón).
Puedes añadir clases extra con `className` (por ejemplo "header__cta" para posicionarlo en el Header).*/
export default function Button({
  children, //texto del botón
  to, //navegación interna, ej: /producto/3
  href, //enlace externo o ancla, ej: #login o https://google.com
  onClick, //función al hacer click
  type = "button", //Tipo de botón (button, submit)
  className = "", //Clase css extra (header__cta, catcard__cta)
  ariaLabel, //Texto alternativo para lectores de pantalla, accesibilidad
}) {
  const classes = `btn ${className}`.trim(); //"Pon siempre la clase btn y si me pasan otra clase, añádela también."
  //.trim() elimina espacios en blanco al inicio y al final de la cadena resultante.

  // 1) Navegación interna
  if (to) { //Si me pasan la prop to, es un Link de React Router
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick}>{children} </Link>
    );
  }

  // 2) Enlaces (anclas o externos)
  if (href) { //Si me pasan la prop href, es un enlace <a>
    return (
      <a href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>{children}</a>
    );
  }

  // 3) Botón normal
  return ( //Si no me pasan ni to ni href, es un botón <button>
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>{children}</button>
  );
}
