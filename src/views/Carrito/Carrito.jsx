import React, { useEffect, useState } from "react";
import CarritoItem from "../../components/CarritoItem/CarritoItem.jsx";
import Navbar from "../../components/Navbar/navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./carrito.css";
import Footer from "../../components/footer/Footer.jsx";
import Hero from "../../components/hero/hero.jsx";
import { Container, Row, Col, Card, Button, Pagination } from "react-bootstrap";

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const urlServer = "http://localhost:2999";
  const endpoint = "/carrito";

  const handleGetCarrito = async () => {
    try {
      const response = await axios.get(urlServer + endpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response", response.data);
      setCarrito(response.data);
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert(
        "Hubo un error al cargar los productos. Por favor, inténtalo de nuevo. 🙁"
      );
    }
  };
  useEffect(() => {
    handleGetCarrito();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Debes iniciar sesión para vender productos.");
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero title="Estan esperando por ti..." />
      <div className="miContainer body">
        <Row className="justify-content-center">
          {carrito.map((productos) => (
            <Col xs={12} sm={6} md={4} lg={3}>
              <CarritoItem key={productos._id} productos={productos} />
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default Carrito;
