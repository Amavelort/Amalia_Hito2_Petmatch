import Button from "../components/Button.jsx";
import "./Login.css";

export default function Login() {
  return (
    <main className="login">
      <section className="login__card">
        <h1 className="login__title">Iniciar sesión</h1>

        <p className="login__text">
          Esta pantalla forma parte de la estructura de navegación de Whisker.
          En esta fase del proyecto, el inicio de sesión no es funcional.
        </p>
        <p className="login__hint">El acceso real se desarrollará en un futuro.</p>

        <Button to="/" className="login__cta">Volver al inicio</Button>
      </section>
    </main>
  );
}
