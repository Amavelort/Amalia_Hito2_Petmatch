import "./Home.css";
import Button from "../components/Button";
//import { FaPaw } from "react-icons/fa"; he quitado este icono para que tenga menos para importar
import {
  FiCheckCircle,
  FiFileText,
  FiShield,
  FiMapPin,
  FiSend,
  FiSearch,
  FiInfo,
  FiMail,
} from "react-icons/fi";

export default function Home() {
  return (
    <main className="homeM">
      {/* HERO (unificado) */}
      <section className="homeM__hero">
        <div className="homeM__container">
          <div className="homeM__heroBanner">
            <div className="homeM__heroLeft">
              <p className="homeM__kicker">Whisker · adopción felina</p>

              <h1 className="homeM__title"> Encuentra a tu compañero ideal 
                <span className="homeM__titlePaws" aria-hidden="true">🐾</span>
              </h1>

              <p className="homeM__lead">
                Puedes ver gatitos en adopción, entrar a su ficha completa y contactar si crees
                que encaja contigo. Sin prisas, sin líos.
              </p>

              {/* Bloque de acción: badges + botones (para que no se “despeguen”) */}
              <div className="homeM__ctaBlock">
                <div className="homeM__badges" aria-label="Información rápida">
                  <span className="homeM__badge">
                    <FiCheckCircle className="homeM__badgeIcon" aria-hidden="true" />
                    Fichas ampliadas
                  </span>
                  <span className="homeM__badge">
                    <FiShield className="homeM__badgeIcon" aria-hidden="true" />
                    Estado (vacunas, etc.)
                  </span>
                  <span className="homeM__badge">
                    <FiMapPin className="homeM__badgeIcon" aria-hidden="true" />
                    Ubicación
                  </span>
                </div>

                <div className="homeM__actions">
                  <Button to="/gatos">Ver gatitos</Button>
                  <Button to="/adoptar" className="btn--inactive"> Cómo adoptar</Button>
                </div>
              </div>
            </div>

            <div className="homeM__heroRight" aria-hidden="true">
              <img className="homeM__herocatImg" src="/images/adoptame-256.webp"srcSet="/images/adoptame-256.webp 256w,/images adoptame-512.webp 512w" sizes="(max-width: 768px) 160px, 258px" width="258" height="258" alt=""/>
              <p className="homeM__heroQuote">“Adoptar es sumar. Un hogar cambia una vida.”</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="homeM__section homeM__about">
        <div className="homeM__container homeM__aboutInner">
          <div className="homeM__aboutText">
            <h2 className="homeM__h2">Quiénes somos</h2>

            <p className="homeM__p">
              Whisker es una iniciativa centrada en la adopción felina responsable.
              Nuestro objetivo es facilitar información clara para que cada adopción sea
              consciente y duradera.
            </p>

            <p className="homeM__p">
              Creemos que adoptar no es solo rescatar, sino crear un vínculo estable entre
              personas y animales.
            </p>
          </div>

          <div className="homeM__stats">
            <div className="homeM__stat">
              <p className="homeM__statNum">260+</p>
              <p className="homeM__statLabel">Gatitos rescatados</p>
            </div>

            <div className="homeM__stat">
              <p className="homeM__statNum">98</p>
              <p className="homeM__statLabel">Adopciones</p>
            </div>

            <div className="homeM__stat">
              <p className="homeM__statNum">56</p>
              <p className="homeM__statLabel">En acogida</p>
            </div>

            <div className="homeM__stat">
              <p className="homeM__statNum">15</p>
              <p className="homeM__statLabel">Voluntarios</p>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ ADOPTAR (unificado) */}
      <section className="homeM__section homeM__sectionAlt">
        <div className="homeM__container">
          <h2 className="homeM__h2">Por qué adoptar</h2>
          <p className="homeM__p">
            Queremos que sea una experiencia bonita y responsable, para ti y para el gato.
          </p>

          <article className="homeM__panel">
            <ul className="homeM__list" aria-label="Motivos para adoptar">
              <li className="homeM__listItem">
                <span className="homeM__listIcon" aria-hidden="true">
                  <FiCheckCircle />
                </span>
                <div className="homeM__listText">
                  <h3 className="homeM__h3">Adopción consciente</h3>
                  <p className="homeM__p2">Compatibilidad antes que impulsos: mejor para todos.</p>
                </div>
              </li>

              <li className="homeM__listItem">
                <span className="homeM__listIcon" aria-hidden="true">
                  <FiShield />
                </span>
                <div className="homeM__listText">
                  <h3 className="homeM__h3">Bienestar animal</h3>
                  <p className="homeM__p2">Acompañamos la adaptación y resolvemos dudas.</p>
                </div>
              </li>

              <li className="homeM__listItem">
                <span className="homeM__listIcon" aria-hidden="true">
                  <FiFileText />
                </span>
                <div className="homeM__listText">
                  <h3 className="homeM__h3">Información clara</h3>
                  <p className="homeM__p2">Ficha ampliada con datos extra más allá de la tarjeta.</p>
                </div>
              </li>

              <li className="homeM__listItem">
                <span className="homeM__listIcon" aria-hidden="true">
                  <FiSend />
                </span>
                <div className="homeM__listText">
                  <h3 className="homeM__h3">Si no puedes adoptar</h3>
                  <p className="homeM__p2">Puedes difundir para ayudar igualmente.</p>
                </div>
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* CÓMO FUNCIONA (unificado) */}
      <section className="homeM__section">
        <div className="homeM__container">
          <h2 className="homeM__h2">Cómo funciona</h2>
          <p className="homeM__p">Un proceso simple, pensado para ayudarte a elegir bien.</p>

          <article className="homeM__panel">
            <div className="homeM__panelGrid">
              <div className="homeM__panelItem">
                <p className="homeM__stepNum" aria-hidden="true">
                  <FiSearch />
                </p>
                <h3 className="homeM__h3">Explora</h3>
                <p className="homeM__p2">Entra al listado y mira los perfiles con calma.</p>
              </div>

              <div className="homeM__panelItem">
                <p className="homeM__stepNum" aria-hidden="true">
                  <FiInfo />
                </p>
                <h3 className="homeM__h3">Comprueba</h3>
                <p className="homeM__p2">Revisa su ficha: información extra y detalles útiles.</p>
              </div>

              <div className="homeM__panelItem">
                <p className="homeM__stepNum" aria-hidden="true">
                  <FiMail />
                </p>
                <h3 className="homeM__h3">Contacta</h3>
                <p className="homeM__p2">Escríbenos y te orientamos en el proceso de adopción.</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* BANNER FINAL (único CTA a contacto) */}
      <section className="homeM__banner">
        <div className="homeM__container homeM__bannerInner">
          <div className="homeM__bannerText">
            <h2 className="homeM__h2">¿Listo para conocerlos?</h2>
            <p className="homeM__p">
              Si quieres adoptar o tienes dudas, escríbenos y te orientamos sin compromiso.
            </p>
          </div>

          <Button to="/contacto" className="homeM__cta">
            Contacto
          </Button>
        </div>
      </section>
    </main>
  );
}
