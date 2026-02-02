import "./Adoptar.css";
import Button from "../components/Button.jsx";

export default function Adoptar() {
  return (
    <main className="page">
      <section className="page__card">
        <h1 className="page__title">Adopción responsable</h1>

        <p className="page__text">
          Adoptar es un compromiso a largo plazo. En Whisker buscamos que cada
          gatito encuentre un hogar estable, seguro y con paciencia para su
          adaptación.
        </p>

        <h2 className="page__subtitle">¿Cómo es el proceso?</h2>

        <ol className="page__list">
          <li>
            <strong>Elige un gatito</strong> y revisa su ficha para ver si encaja contigo.
          </li>
          <li>
            <strong>Contacta con nosotros</strong> para resolver dudas y conocer su historia.
          </li>
          <li>
            <strong>Entrevista rápida</strong> para asegurarnos de que el hogar es adecuado.
          </li>
          <li>
            <strong>Adopción y seguimiento</strong> durante las primeras semanas para ayudarte con la adaptación.
          </li>
        </ol>

        <div className="page__actions">
          <Button to="/gatos" className="page__cta"> Ver gatitos en adopción </Button>          
        </div>
        <p className="page__note"> Nota: esta página es informativa y forma parte de la navegación por rutas del proyecto.</p>
      </section>
    </main>
  );
}

