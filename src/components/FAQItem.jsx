import { useState } from "react"; 
import "./FAQItem.css";

/* Componente FAQItem, recibe por props:
 - question → texto de la pregunta
 - answer → texto de la respuesta*/
export default function FAQItem({ question, answer }) {

  /* Estado local para controlar si la respuesta está abierta o cerrada
  - isOpen = false → respuesta cerrada
  - isOpen = true  → respuesta visible */
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Contenedor principal de cada pregunta del FAQ
    <div className="faq">

      {/* Cabecera clickable de la pregunta */}
      <button
        className="faq__header"
        /* Al hacer click, alterna el estado:
        - si está cerrado → se abre
        - si está abierto → se cierra*/
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Texto de la pregunta */}
        <span>{question}</span>

        {/* Flecha indicadora: siempre se muestra, añade la clase "open" cuando isOpen es true*/}
        <span className={`faq__arrow ${isOpen ? "open" : ""}`}>▾</span>
      </button>

      {/* Renderizado condicional: Solo se muestra el contenido cuando isOpen es true*/}
      {isOpen && (
        <div className="faq__content">
          {/* Texto de la respuesta */}
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
