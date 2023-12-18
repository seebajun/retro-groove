import NavB from "../../components/Navbar/navbar";
import Form from 'react-bootstrap/Form';
import './perfil.css'
import { Container, Col, Row, Card, TabContainer, Nav } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useState, useEffect } from "react";

const Perfil = () =>{
            //consumir api de usuario
        const [user, setUser] = useState({
            nombre: "",
            apellido: "",
            email: ""});
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
                alert("Hubo un error al cargar los productos. Por favor, inténtalo de nuevo. 🙁");
            }    
        
        };
        useEffect(() => {
            handleGetUser();
        }, []);
        return(
            <>
            <NavB />
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Perfil</Card.Title>
                                <Card.Text>{user.nombre}</Card.Text>
                                <Card.Text>{user.apellido}</Card.Text>
                                <Card.Text>{user.email}</Card.Text>
                                <Button variant="primary">Editar</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* footer con redes sociales */}
            <div></div>
            </>
            
            
            
        );
};

export default Perfil;