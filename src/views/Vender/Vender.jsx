import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import NavB from "../../components/Navbar/navbar";
import axios from "axios";
import "./index.css";

const Vender = () => {
  const [producto, setProducto] = useState({
    titulo: "",
    descripcion: "",
    formato: "",
    imagen: "",
    precio: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProducto({
      ...producto,
      [name]: value,
    });
  };

  const handleVender = async () => {
    const urlServer = "http://localhost:2999";
    const endpoint = "/vender";
    const token = localStorage.getItem("token"); 
    console.log("Token:", token);

    try {
      console.log("axios vender", producto);
      const response = await axios.post(urlServer + endpoint, producto, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);
      alert("Producto subido con éxito 😀");
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert(
        "Hubo un error al subir el producto. Por favor, inténtalo de nuevo. 🙁"
      );
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Debes iniciar sesión para vender productos.");
    }
  }, []);

  return (
    <>
    <NavB />
      <div className="contenedorMain">
        <div className="venderContenedor">
          <h1>Vender</h1>
          <Form.Control
            type="text"
            placeholder="Titulo"
            name="titulo"
            value={producto.titulo}
            onChange={handleInputChange}
          />
          <br />
          <Form.Control
            type="text"
            placeholder="descripcion"
            name="descripcion"
            value={producto.descripcion}
            onChange={handleInputChange}
          />
          <br />
          <Form.Select
            aria-label="Default select example"
            name="formato"
            value={producto.formato}
            onChange={handleInputChange}
          >
            <option>Formato</option>
            <option value="Vinilo">Vinilo</option>
            <option value="CDs">CDs</option>
            <option value="Cassete">Cassete</option>
          </Form.Select>
          <br />
          <Form.Control
            type="text"
            placeholder="Imagen"
            name="imagen"
            value={producto.imagen}
            onChange={handleInputChange}
          />
          <br />
          <Form.Control
            type="number"
            placeholder="Precio"
            name="precio"
            value={producto.precio}
            onChange={handleInputChange}
          />
          <br />
          <Button variant="primary" onClick={handleVender}>
            Subir
          </Button>
        </div>
      </div>
    </>
  );
};

export default Vender;
