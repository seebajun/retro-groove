import React from "react";

import { Form, Button } from "react-bootstrap";

import NavB from "../../components/Navbar";
import "./index.css";

const Vender = () => {
  return (
    <>
    <NavB />
      <div className="contenedorMain">
        <div className="venderContenedor">
          <h5>Vender</h5>
          <Form.Control type="text" placeholder="Titulo" />
          <br />
          <Form.Control as="textarea" placeholder="Descripción" rows={3} />          <br />
          <Form.Select aria-label="Default select example">
            <option>Formato</option>
            <option value="1">Vinilo</option>
            <option value="2">CDs</option>
            <option value="3">Cassete</option>
          </Form.Select>
          <br />
          <Form.Control type="text" placeholder="URL" />
          <br />
          <Form.Control type="number" placeholder="Precio" />
          <br />
          
          <Button variant="primary"> Subir </Button>

        </div>
      </div>
    </>
  );
};

export default Vender;
