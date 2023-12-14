import { React, Context } from "react";
import "./index.css";
import { Button } from "react-bootstrap";
import NavB from "../../components/Navbar/navbar.jsx";



const Producto = () => {


  return (
    <>
      {/* <NavB />
      <div className="contenedor">
        <div key={primerProducto.id} className="contenedorCard">
          <div className="cardContent">
            <img src={primerProducto.url} alt={primerProducto.nombre} />
            <div className="cardText">
              <h1>{primerProducto.nombre}</h1>
              <h5>{`$${primerProducto.precio}.-`}</h5>
              <h5>{primerProducto.descripcion}</h5>
              <div className="botones">
                <Button variant="primary">🛒</Button>
                <Button variant="primary">❤</Button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Producto;
