import "./Legal.css";
import FAQItem from "../components/FAQItem";

export default function FAQ() {
  return (
    <main className="legal">
      <section className="legal__container">
        <h1>Preguntas frecuentes</h1>

        <FAQItem
          question="¿Cómo puedo adoptar un gato?"
          answer="Puedes contactar con la protectora correspondiente a través de la ficha del gato y seguir el proceso de adopción."
        />

        <FAQItem
          question="¿Tiene algún coste adoptar?"
          answer="La adopción puede incluir una tasa simbólica destinada a cubrir gastos veterinarios."
        />

        <FAQItem
          question="¿Whisker es una protectora?"
          answer="No. Whisker es una plataforma que conecta a personas adoptantes con protectoras y asociaciones."
        />

        <FAQItem
          question="¿Puedo colaborar aunque no adopte?"
          answer="Sí, puedes ayudar difundiendo, siendo casa de acogida o colaborando con las asociaciones."
        />
      </section>
    </main>
  );
}
