import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import axios from "axios";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const NavB = () => {
  const navigate = useNavigate();
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

  const handleLogout = async () => {
    // Mostrar un cuadro de diálogo de confirmación personalizado con swal
    const result = await Swal.fire({
      title: "¿Cerrar sesión?",
      text: "¿Estás seguro de que deseas cerrar sesión?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      // El usuario confirmó cerrar sesión
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <Navbar className="navbar" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/landing">
          <img
            alt="Logo"
            src="https://ibb.co/[url=https://ibb.co/Vv5m8NV][img]https://i.ibb.co/Hr3dQ27/logo.png[/img][/url]"
            width="30"
            height="30"
            class="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex">
            <Nav.Link href="/landing">Explorar</Nav.Link>
            <Nav.Link href="/vender" className="">
              Vender
            </Nav.Link>
            <Nav.Link href="/favoritos" className="ml-auto">
              <i class="fa-solid fa-star"></i> Favoritos
            </Nav.Link>
            <Nav.Link href="/publicaciones" className="ml-auto">
              <i class="fa-solid fa-shop"></i> Mis publicaciones
            </Nav.Link>
            <Nav.Link href="/carrito" className="ml-auto">
              <i class="fa-solid fa-cart-shopping"></i> Carrito
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex">
            <Nav.Link href="/perfil" className="justify-content-end">
              <i class="fa-regular fa-user"></i> Bienvenido, {user.nombre}
            </Nav.Link>
            <Nav.Link href="" className="off " onClick={handleLogout}>
              <i class="fa-solid fa-power-off"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavB;
