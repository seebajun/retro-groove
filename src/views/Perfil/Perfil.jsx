import NavB from "../../components/Navbar/navbar";
import Form from 'react-bootstrap/Form';
import './perfil.css'
import { Container, Col, Row, Card, TabContainer, Nav } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const Perfil = () =>{
        const navigate = useNavigate();
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
            <div className="miContainer">
            <Container className="vh-100">
                <Row>
                    <Col sm={4}>
                        <Card>
                            <Card.Body className="">
                                <Card.Title>Mi perfil</Card.Title>
                                <Card.Text>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control type="text" placeholder={user.nombre} disabled/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Apellido</Form.Label>
                                            <Form.Control type="text" placeholder={user.apellido} disabled/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder={user.email} disabled/>
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Actualizar
                                        </Button>
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={8}>
                        <Card className="p-5">
                            <Card.Body>
                                <Card.Title>Vender en Retro Groove</Card.Title>
                                <Card.Text>Vende tus discos, vinilos y cassetes -nuevos o usados- a miles de usuarios en todo el pais, de manera facil y 100% gratuita</Card.Text>
                                <Button variant="primary" onClick={() => navigate(`/vender`)}>Publicar un articulo</Button>
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