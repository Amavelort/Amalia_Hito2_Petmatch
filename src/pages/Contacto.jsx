import "./Contacto.css";
import Button from "../components/Button.jsx";

function Contact() {
  return (
    <main className="contact">
      <section className="contact__card">
        <h1 className="contact__title">Contacto</h1>

        <p className="contact__text">
          Si estás interesado en adoptar alguno de nuestros gatitos o tienes
          cualquier duda, puedes escribirnos a través de este formulario.
        </p>

        <form className="contact__form">
          <label className="contact__label"> <span>Nombre</span> <input type="text" className="contact__input" placeholder="Tu nombre"/></label>
          <label className="contact__label"> <span>Email</span> <input type="email" className="contact__input" placeholder="tucorreo@email.com"/>
          </label>

          <label className="contact__label"><span> Mensaje </span> <textarea className="contact__textarea" placeholder="Escribe tu mensaje aquí"/>
          </label>
          <Button type="submit" className="contact__button"> Enviar mensaje </Button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
