import React from "react";
import "./index.css";
import {Link} from "react-router-dom"
import { Button } from "react-bootstrap"
import NavB from "../../components/Navbar/index.jsx";
import { useNavigate } from "react-router-dom";

const Producto = () => {
  const navigate = useNavigate();
  navigate('/carrito')
  return (
    <>
    <NavB />
    <div className="contenedor">
      <div className="contenedorCard">
        <div className="imgCard">
          <img
            src="https://dojiw2m9tvv09.cloudfront.net/41657/product/X_1850117-28048004736.jpg?48&time=1701115645"
          />
        </div>
        <div className="cardContent">
          <h2>Title</h2>
          <h5>$9.990.-</h5>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque repudiandae, facere fugit reiciendis aspernatur dignissimos aliquam dicta totam sapiente id neque, impedit ipsam quod numquam sit natus eaque! Deserunt!</h5>
          <div className="precio">
          <button type="button" class="btn btn-outline-secondary"><Link to="/carrito">agregar al 🛒</Link></button>
            <Button variant="primary"> ❤ </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


export default Producto;
