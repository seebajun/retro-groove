import React from "react";
// import Login from "./views/Landing/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./context/index";
//componentes
import Navbar from "./components/Navbar/index.jsx";

//views
import Home from "./views/Home/Home.jsx";
import Landing from "./views/Landing/landing.jsx";
import Perfil from "./views/Perfil/Perfil.jsx";
import Producto from "./views/Producto/Producto.jsx";
import Registrarse from "./views/Registrarse/Registrarse.jsx";
import Vender from "./views/Vender/Vender.jsx";
import Carrito from "./views/Carrito/carrito.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/vender" element={<Vender />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/producto" element={<Producto />} /> */
      </Routes>
    </BrowserRouter>
  );
}

export default App;
