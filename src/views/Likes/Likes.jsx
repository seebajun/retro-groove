import React, { useEffect, useState } from "react";
import LikeItem from "../../components/Likesitem/likeitem";
import Navbar from "../../components/Navbar/navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./likes.css";
import Footer from "../../components/footer/Footer.jsx";
import Hero from "../../components/hero/hero.jsx";
import { Container, Row, Col, Card, Button, Pagination } from "react-bootstrap";

const Likes = () => {
  const [likes, setLikes] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("Token:", token);
  const urlServer = "http://retrogrooveapi.onrender.com";
  const endpoint = "/favoritos";
  console.log("Token:", token);
  const handleGetLikes = async () => {
    try {
      const response = await axios.get(urlServer + endpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response", response.data);
      setLikes(response.data);
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert(
        "Hubo un error al cargar los productos. Por favor, inténtalo de nuevo. 🙁"
      );
    }
  };
  useEffect(() => {
    handleGetLikes();
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
          {likes.map((productos) => (
            <Col xs={12} sm={6} md={4} lg={3}>
              <LikeItem key={productos.id} productos={productos} />
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default Likes;
