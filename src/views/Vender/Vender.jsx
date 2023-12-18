import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import NavB from "../../components/Navbar/navbar";
import axios from "axios";
import "./index.css";
import { useNavigate } from "react-router-dom";


const Vender = () => {
  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  const navigate = useNavigate();
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

    if (
      producto.titulo === "" ||
      producto.descripcion === "" ||
      producto.formato === "" ||
      producto.imagen === "" ||
      producto.precio === 0
    ) {
      alert("Debes llenar todos los campos");
      return;
    }


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
      navigate("/");
    }
  }, []);

  return (
    <>
      <NavB />

      {/* <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Titulo"
            name="titulo"
            value={producto.titulo}
            onChange={handleInputChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Describe tu producto</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="descripcion"
            name="descripcion"
            value={producto.descripcion}
            onChange={handleInputChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">🎵</InputGroup.Text>
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
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Imagen"
            name="imagen"
            value={producto.imagen}
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Precio"
            name="precio"
            value={producto.precio}
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit" onClick={handleVender}>Submit form</Button>
    </Form> */}

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
          <Form.Check
          required
          label="Acepto los terminos y condiciones"
          feedback="Debes aceptar los terminos y condiciones."
          feedbackType="invalid"
          />
          <br />
          <Button variant="primary" onClick={handleVender} type="submit">
            Subir
          </Button>
        </div>
      </div>
    </>
  );
};

export default Vender;
