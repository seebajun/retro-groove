import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {Link} from "react-router-dom"

const NavB = () => {
    return (
        <Navbar bg="primary" variant='dark'>
            <Container>
                <Navbar.Brand>Retro Groove</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/producto">Buscar</Nav.Link>
                    <Nav.Link href="/carrito">Carrito</Nav.Link>
                    <Nav.Link href="/vender">Vender</Nav.Link>
                    <Nav.Link href="/perfil" className='justify-content-end'>Usuario</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavB;