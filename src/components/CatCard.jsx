import { useState } from "react";
import "./CatCard.css";
//import { Link } from "react-router-dom"; ya no hace falta porque usamos el Button.jsx
import Button from "./Button.jsx";

//se puede importar y poner una function en una misma línea:
export default function CatCard({name, age, location, image, description, initialLikes = 0, id}) { 
  const [liked, setLiked] = useState(false); //liked contenedor (cajita del booleano true/false), setLiked función para actualizar el estado, el "botón" que actualiza el booleano. Liked es el "on/off"
  const [likes, setLikes] = useState(initialLikes); //likes → una cajita con un número. Empieza con el número que venga (initialLikes), setLikes → el botón que cambia ese número

  const toggleLike = () => { //“Cuando hago click, pasa ESTO:”
    setLiked((prevLiked) => { //“Coge lo que había antes (prevLiked) y cámbialo al contrario”. Si era true, ponlo a false. Si era false, ponlo a true.
    setLikes((prevLikes) => (prevLiked ? prevLikes - 1 : prevLikes + 1)); //Si ya estaba likeado (prevLiked true), quita 1. Si no lo estaba (prevLiked false), suma 1.
    return !prevLiked;
    });
  };
  
  return (
    <article className="catcard">
      <div className="catcard__media">  {/*En catcard_media está el contenedor de la imagen*/}
        {/*Al estar las imágenes en /public/images, NO se importa con import. Se accede directamente con la ruta /images/archivo.png*/}       
        <img
          className="catcard__img" //imagen del gato
          src={image} //pasa la ruta de la imagen que tenemos en la variable image. Ejemplo: /images/cat1.jpg
          alt={`Foto de ${name}`} //escribe "foto de" y añade el nombre del gato que tenemos en la variable name
          loading="lazy" //orden que carga la imagen solo cuando está a punto de verse en pantalla
        />

        {/* Botón corazón con contador */}
        <button
          type="button"
          className={`catcard__like ${liked ? "is-liked" : ""}`} //catcard_like -> BOTÓN del corazón. El is liked es el estado del botón, si está likeado o no.
          onClick={toggleLike}
          aria-label="Dar me gusta"
        >
          <span className="catcard__heart">
            {liked ? "♥" : "♡"} {/*Son dos caracteres diferentes.*/}
          </span>
          <span className="catcard__count">{likes}</span> {/*Muestra el número que hay en la cajita likes.*/}
        </button>
      </div>

      <div className="catcard__body">
        <h3 className="catcard__title">{name}</h3>

        <p className="catcard__info">{age} • {location} {/*pone la edad y la ubicación separada por un punto*/}</p>

        <p className="catcard__desc">{description}</p>

        <div className="catcard__profile"> {/*Contenedor del botón ver perfil*/}
          {/*<Link to ={`/producto/${id}`}> **Le podremos pasar el nº al prop. Si ponemos <Link to={`/producto/${item.id}`}>, item no existe por tanto no lo leía.**
          <button className="button_base button_variant">Ver perfil</button>
          </Link>*/}
          {/*Ahora el botón es el Link anterior, porque le pasamos el to*/}
          <Button to={`/producto/${id}`} className="catcard__cta"> Ver perfil </Button>
        </div>
      </div>
    </article>
  );
}
