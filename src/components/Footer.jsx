import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear(); //Obtiene el año actual a través de nuestro ordenador: new Date() → fecha de ahora .getFullYear() → saca el año, year → guarda ese número.

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__brand">
          <strong>Whisker</strong> · Adopción felina responsable
        </p>

        <nav className="footer__links" aria-label="Enlaces del pie de página">
          <Link to="/privacidad">Política de privacidad</Link>
          <Link to="/terminos">Términos y condiciones</Link>
          <Link to="/faq">Preguntas frecuentes</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        <p className="footer__copy">© {year} Whisker. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
