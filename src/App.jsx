import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Contact from "./pages/Contacto.jsx";
import NotFound from "./pages/NotFound.jsx";
import Gatos from "./pages/Gatos.jsx";
import Adoptar from "./pages/Adoptar.jsx";
import Donar from "./pages/Donar.jsx";
import Privacidad from "./pages/Privacidad.jsx";
import Terminos from "./pages/Terminos.jsx";
import Faq from "./pages/Faq.jsx";

function App() {
  return (
  <> {/*dependiendo de nuestro código, podemos necesitar un div o no, antes de poner el Header o el path*/}
  <Header/>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/login" element={<Login />} />
      {/*el :id es para que nos lleve al "producto"*/}
      <Route path="/producto/:id" element={ <ProductDetail/> } />
      <Route path="/gatos" element={<Gatos />} />
      <Route path="/adoptar" element={<Adoptar />} />
      <Route path="/donar" element={<Donar />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/privacidad" element={<Privacidad />} />
      <Route path="/terminos" element={<Terminos />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  <Footer/>
  </>
  )
}

export default App;