import { React, useContext } from "react";
import "./index.css";
import { Button } from "react-bootstrap";
import NavB from "../../components/Navbar/navbar.jsx";

import Context from "../../context/index.js";

const Producto = () => {
  const { data, carrito, setCarrito, setTotal } = useContext(Context);
  const primerProducto = data[0];



  return (
    <>
      <NavB />
      <div className="contenedor">
        <div key={primerProducto.id} className="contenedorCard">
          <div className="imgCard">
            <img src={primerProducto.url} alt={primerProducto.nombre} />
          </div>
          <div className="cardContent">
            <h2>{primerProducto.nombre}</h2>
            <h5>{`$${primerProducto.precio}.-`}</h5>
            <h5>{primerProducto.descripcion}</h5>
            <div className="precio">
              <Button variant="primary">Agregar al 🛒</Button>
              <Button variant="primary">❤</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Producto;
