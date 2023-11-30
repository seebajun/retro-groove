import { Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home.jsx";
import Landing from "../views/Landing/landing.jsx";
import Perfil from "../views/Perfil/Perfil.jsx";
import Producto from "../views/Producto/Producto.jsx";
import Registrarse from "../views/Registrarse/Registrarse.jsx";
import Vender from "../views/Vender/Vender.js";
import Carrito from "../views/Carrito/Carrito.jsx";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/vender" element={<Vender />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/registrarse" element={<Registrarse />} />
      <Route path="/producto:nombre" element={<Producto />} />
    </Routes>
  );
};
