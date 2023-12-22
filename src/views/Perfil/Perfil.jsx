import NavB from "../../components/Navbar/navbar";
import Form from "react-bootstrap/Form";
import "./perfil.css";
import { Container, Col, Row, Card, TabContainer, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/hero/hero";

const Perfil = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });
  const token = localStorage.getItem("token");
  console.log("Token:", token);
  const urlServer = "http://retrogrooveapi.onrender.com";
  const endpoint = "/perfil";
  console.log("Token:", token);
  const handleGetUser = async () => {
    try {
      const response = await axios.get(urlServer + endpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response", response.data);
      setUser(response.data);
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert(
        "Hubo un error al cargar los productos. Por favor, inténtalo de nuevo. 🙁"
      );
    }
  };
  useEffect(() => {
    handleGetUser();
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
      <NavB />
      <Hero title={user.name} />
      <div className="miContainer body">
        <Container className="">
          <Row>
            <Col sm={6}>
              <Card className="">
                <Card.Body className="">
                  <Card.Title>Mi perfil</Card.Title>
                  <Card.Text>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder={user.nombre}
                          disabled
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder={user.apellido}
                          disabled
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder={user.email}
                          disabled
                        />
                      </Form.Group>
                    </Form>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card className="p-5">
                <Card.Body>
                  <Card.Title>Vender en Retro Groove</Card.Title>
                  <Card.Text>
                    Vende tus discos, vinilos y cassetes -nuevos o usados- a
                    miles de usuarios en todo el pais, de manera facil y 100%
                    gratuita
                  </Card.Text>
                  <Button
                    className="btn btn-outline-dark"
                    variant=""
                    onClick={() => navigate(`/vender`)}
                  >
                    Publicar un articulo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Card className="p-5">
                <Card.Body>
                  <Card.Title>Mis favoritos</Card.Title>
                  <Card.Text>
                    Guarda tus articulos favoritos para comprarlos cuando
                    quieras
                  </Card.Text>
                  <Button
                    variant=""
                    className="btn btn-outline-dark"
                    onClick={() => navigate(`/favoritos`)}
                  >
                    Ver favoritos
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card className="p-5">
                <Card.Body>
                  <Card.Title>Mis publicaciones</Card.Title>
                  <Card.Text>Administra tus articulos publicados</Card.Text>
                  <Button
                    variant=""
                    className="btn btn-outline-dark"
                    onClick={() => navigate(`/publicaciones`)}
                  >
                    Ver publicaciones
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Perfil;
