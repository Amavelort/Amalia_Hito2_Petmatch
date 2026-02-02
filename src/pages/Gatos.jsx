import { useState } from "react"; 
import "./Gatos.css";
import CatCard from "../components/CatCard";
import cats from "../data/items";

export default function Gatos() {
  //Estado para cambiar entre grid y lista
  const [view, setView] = useState("grid"); // "grid" | "list"
  return (
    //el top puede que lo use más adelante para el botón de volver arriba. Lo dejo ya puesto
    <div id="top">      
      <main>
        <section id="gatos">
        <div className="sectionHeader">
          <h2>Gatitos en adopción</h2>

          {/* Botones de vista grid y list */}
            <div className="viewToggle" role="group" aria-label="Cambiar vista">
              <button
                type="button"
                className={`toggleBtn ${view === "grid" ? "is-active" : ""}`}
                onClick={() => setView("grid")}>Grid{/*Al hacer click, cambia el estado a "grid" --> */}                
              </button>
          {/*view === "grid" ? "is-active" : ""-->Si view vale "grid", usa la clase is active, solo para el botón*/}
              <button
                type="button"
                className={`toggleBtn ${view === "list" ? "is-active" : ""}`}
                onClick={() => setView("list")}>Lista
              </button>
            </div>
          </div>

          {/* Contenedor: cambia la clase según el estado */}
          <div className={view === "grid" ? "grid" : "list"}>

          {/*Recorremos el array de gatos y duplicamos automáticamente las cards*/}
          {/*<div className="grid"> --> para crear cards en columnas y se vean las cards una debajo de otra*/}
            {cats.map((cat) => (
              <CatCard
                key={cat.id}
                id={cat.id} //hay que poner cat.id no item.id porque el parámetro se llama cat en este map
                name={cat.name}
                age={cat.age}
                location={cat.location}
                image={cat.image}
                description={cat.description}
                initialLikes={cat.likes}
              />
            ))}
          </div>
        </section>
      </main>
      
    </div>
  );
}
