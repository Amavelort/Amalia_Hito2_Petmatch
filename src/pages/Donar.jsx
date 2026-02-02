import "./Donar.css";
import Button from "../components/Button";
import { FaStethoscope, FaUtensils, FaBoxOpen, FaHeart } from "react-icons/fa";

export default function Donar() {
  return (
    <main className="donarM">
      <section className="donarM__hero">
        <div className="donarM__container">
          <div className="donarM__card">
            <p className="donarM__kicker">WHISKER · DONAR</p>

            <h1 className="donarM__title">
              Tu ayuda se convierte en comida, medicina y rescates.
            </h1>

            <p className="donarM__lead">
              Si quieres aportar, escríbenos y te orientamos con la opción que mejor te encaje:
              donación puntual, apoyo mensual o entrega de materiales. Cada aporte suma de verdad,
              porque va directo a cubrir necesidades reales (urgencias veterinarias, alimentación
              de colonias y recursos para acogidas). Sin complicarte: tú nos dices cómo quieres
              ayudar y lo dejamos listo.
            </p>

            {/* Cards horizontales (estilo Adopción) */}
            <div className="donarM__rows" aria-label="En qué se invierte">
              <article className="donarM__row">
                <div className="donarM__rowIcon" aria-hidden="true">
                  <FaStethoscope />
                </div>
                <div className="donarM__rowBody">
                  <p className="donarM__rowTitle">Veterinario</p>
                  <p className="donarM__rowText">Urgencias, curas, medicación y revisiones.</p>
                </div>
              </article>

              <article className="donarM__row">
                <div className="donarM__rowIcon" aria-hidden="true">
                  <FaUtensils />
                </div>
                <div className="donarM__rowBody">
                  <p className="donarM__rowTitle">Alimentación</p>
                  <p className="donarM__rowText">Pienso y latitas para colonias y acogidas.</p>
                </div>
              </article>

              <article className="donarM__row">
                <div className="donarM__rowIcon" aria-hidden="true">
                  <FaBoxOpen />
                </div>
                <div className="donarM__rowBody">
                  <p className="donarM__rowTitle">Materiales</p>
                  <p className="donarM__rowText">Mantas, transportines, empapadores y arena.</p>
                </div>
              </article>
            </div>

            <div className="donarM__cta">
              <Button to="/contacto" className="donarM__btn">
                Contactar para donar
              </Button>

              <p className="donarM__note">
                Te responderemos lo antes posible{" "}
                <FaHeart className="donarM__heart" aria-hidden="true" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
