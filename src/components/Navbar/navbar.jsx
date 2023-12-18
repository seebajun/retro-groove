import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./navbar.css";

import { useContext } from "react";
import Context from "../../context/index";

// mostrar el nombre del usuario en el navbar
const NavB = () => {
const { user } = useContext(Context);
  return (
    <Navbar className="navbar" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="titulo" href="/landing">
          Retro Groove
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex">
            <Nav.Link href="/landing">Explorar</Nav.Link>
            <Nav.Link href="/">Favoritos</Nav.Link>
            <Nav.Link href="/vender" className="">
              Vender
            </Nav.Link>
            <Nav.Link href="/perfil" className="">
              Mi perfil
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


// const NavB = () => {
//   return (
//     <Navbar expand="lg" bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand href="/landing">Retro Groove</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="d-flex">
//             <Nav.Link href="/landing">Explorar</Nav.Link>
//             <Nav.Link href="/">Favoritos</Nav.Link>
//             <Nav.Link href="/vender" className="">
//               Vender
//             </Nav.Link>
//             <Nav.Link href="/perfil" className="">
//               Mi perfil
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

export default NavB;
