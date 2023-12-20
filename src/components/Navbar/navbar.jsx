import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";

const NavB = () => {
  const navigate = useNavigate;
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
  });
  const token = localStorage.getItem("token");
  console.log("Token:", token);
  const urlServer = "http://localhost:2999";
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

  return (
    <Navbar className="navbar" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="titulo" href="/landing">
          Retro Groove
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/landing">Explorar</Nav.Link>
            <Nav.Link href="/vender">Vender</Nav.Link>
            <Nav.Link href="/favoritos">
              <i className="fa-solid fa-star"></i> Favoritos
            </Nav.Link>
            <Nav>
              <Nav.Link href="/publicaciones" className="ml-auto">
                <i className="fa-solid fa-shop"></i> Mis publicaciones
              </Nav.Link>
            </Nav>
            <Nav.Link href="/perfil">
              <i className="fa-regular fa-user"></i> Bienvenido, {user.nombre}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavB;

