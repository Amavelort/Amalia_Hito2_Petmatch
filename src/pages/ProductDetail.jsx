//import React from "react"; 
//import { Link } from "react-router-dom";
import "../pages/ProductDetail.css";
import items from "../data/items.js";
import { useParams } from "react-router-dom";
import Button from "../components/Button.jsx";

function ProductDetail() {
    const { id } = useParams(); //recoge los parámetros de la URL para buscar los items y guardarlos en id.
    const producto =items.find((item) => item.id === parseInt(id)); //busca en items el item cuyo id coincida con el id de la URL y lo guarda en producto. Si pones === tienes que poner parseInt para convertir el id de string a número.

if (!producto) {
  return (
    <main className="detailPage">
      <section className="emptyDetail" role="alert" aria-live="polite">
        <p className="emptyDetail__kicker">Error 404</p>
        <h1 className="emptyDetail__title">Gatito no encontrado 🐾</h1>
        <p className="emptyDetail__text">
          Puede que este perfil ya no esté disponible o que el enlace tenga un ID incorrecto.
        </p>

          <div className="emptyDetail__actions">
            <Button to="/gatos">Volver al listado</Button>
            <Button to="/contacto" className="btn--inactive"> Contactar </Button>
          </div>        

        <p className="emptyDetail__hint">
          Tip: vuelve al listado y entra desde la tarjeta para evitar URLs raras.
        </p>
      </section>
    </main>
  );
}

return ( //en el return, solo tenía un <h1{producto.description}</h1> por eso no se me veía toda la ficha del gatito.
    <>
      <article className="detail">
        <div className="detail__media">
          <img className="detail__img" src={producto.image} alt={`Foto de ${producto.name}`} loading="lazy"/>
        </div>
        <div className="detail__body">
          <div className="detail__header">
              <h1 className="detail__title">{producto.name}</h1>
          <div className="detail__section">
              <div className="detail__likes">
                  <span className="detail__heart">♥</span>
                  <span className="detail__likesCount">{producto.likes} personas han mostrado interés</span>
              </div>    
          </div>

              <div className="detail__section">
                <p className="detail__info">{producto.age} • {producto.location}</p>
                <div className="detail__status">
                    <span className={`status ${producto.adoptionStatus.sterilized ? "ok" : "warn"}`}>
                      {producto.adoptionStatus.sterilized ? "✔ Esterilizado" : "✖ No esterilizado"}
                    </span>

                    <span className={`status ${producto.adoptionStatus.vaccinated ? "ok" : "warn"}`}>
                      {producto.adoptionStatus.vaccinated ? "✔ Vacunado" : "✖ No vacunado"}
                    </span>

                    <span className={`status ${producto.adoptionStatus.dewormed ? "ok" : "warn"}`}>
                      {producto.adoptionStatus.dewormed ? "✔ Desparasitado" : "✖ No desparasitado"}
                    </span>

                    {producto.adoptionStatus.foster && (
                      <span className="status info">🏠 En casa de acogida</span>
                    )}
                </div>
                <p className="detail__desc">{producto.descriptionLong}</p>                
              </div>
          </div>
          <Button to="/gatos" className="detail__back">Volver</Button>
        </div>
      </article>
    </>
)
}

export default ProductDetail;
