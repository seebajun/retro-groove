import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./context/index";
import "./index.css";

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
  //cargue el archivo de productos
  const productos = require("./productos.json");
  const [data, setData] = useState(productos);
  //le paso la data al provider
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const sharedState = { data, setData, carrito, setCarrito, total, setTotal };
  return (
    <Context.Provider value={sharedState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/vender" element={<Vender />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/producto" element={<Producto />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
