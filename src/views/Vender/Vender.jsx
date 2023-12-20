import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import NavB from "../../components/Navbar/navbar";
import Hero from "../../components/hero/hero";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import swal from "sweetalert";
import "./index.css";

const Vender = () => {
  const navigate = useNavigate();
  const [botonHabilitado, setBotonHabilitado] = useState(false);
  const [producto, setProducto] = useState({
    titulo: "",
    descripcion: "",
    formato: "",
    imagen: "",
    precio: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setProducto((prevProducto) => ({
      ...prevProducto,
      [name]: inputValue,
    }));
  }

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
      swal("Producto subido con éxito 😀");
    } catch (error) {
      console.error("Error en la solicitud:", error);
      swal(
        "Hubo un error al subir el producto. Por favor, inténtalo de nuevo. 🙁"
      );
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      swal("Ups", "Debes iniciar sesión para vender productos.", "warning");
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const todosDatosCompletos =
      producto.titulo !== "" &&
      producto.descripcion !== "" &&
      producto.formato !== "" &&
      producto.imagen !== "" &&
      producto.precio !== "" &&
      producto.aceptarTerminos;
    setBotonHabilitado(todosDatosCompletos);
  }, [producto]);

  return (
    <>
      <NavB />
      <Hero title="Vende tus productos de forma gratuita" />
      <div className="contenedorMain body">
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
          <Form.Check
             type="checkbox"
             id="aceptarTerminos"
             label="Acepto los términos y condiciones"
             name="aceptarTerminos"
             checked={producto.aceptarTerminos}
             onChange={handleInputChange}
          />
           <br />
          <Button
           variant="dark"
           size="lg"
           onClick={handleVender}
           disabled={!producto.aceptarTerminos}
          >
            Publicar
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Vender;
