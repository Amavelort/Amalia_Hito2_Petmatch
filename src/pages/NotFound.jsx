//import { Link } from "react-router-dom";
import "./NotFound.css";
import Button from "../components/Button.jsx";

export default function NotFound() {
  return (
    <main className="nf">
      <section className="nf__card">
        <div className="nf__media">
          {/* Al estar en /public/images, se usa ruta directa */}
          <img
            className="nf__img"
            src="/images/cats_404.webp"
            alt="Página no encontrada"
            loading="lazy"
          />
        </div>

        <div className="nf__body">
          <h1 className="nf__title">404</h1>
          <p className="nf__text">
            Uy… parece que esta página no existe.
          </p>

          <div className="nf__actions">
            <Button to="/" className="nf__btn"> Volver al inicio </Button>          
          </div>
        </div>
      </section>
    </main>
  );
}
