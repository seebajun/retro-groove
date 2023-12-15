import NavB from "../../components/Navbar/navbar";
import Form from 'react-bootstrap/Form';
import './perfil.css'
import { Container, Col, Row, Card, TabContainer } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const Perfil = () =>{
    return(
        
        <>
        <NavB />
        <Container fluid className="miContenedor">
        <Row xs={1} lg={3} className="d-flex justify-content-center">
            <Col>
                <Card className="cardPerfil">
                    <h4>Mi perfil</h4>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Mi nombre" readOnly disabled className="mb-3"/>
                            </Form.Group>
                        <Form.Group>
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Mi apellido" readOnly disabled className="mb-3"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Mi email" readOnly disabled className="mb-3"/>
                        </Form.Group>
                    </Form>
                </Card>
            </Col>
            <Col>
                <Card className="cardPerfil">
                    <h4>Vender un articulo en Retro Groove</h4>
                    <p>Con Retro Groove puedes publicar y vender tus albumes de vinilos, CD o cassetes, de manera rapida, confiable y 100% gratis.</p>
                    <Button className="w-50" variant="danger" href="/vender">Ir a vender</Button>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col className="d-flex justify-content-center">
                <Container>
                    <h4 className="mb-4">Mis articulos publicados</h4>
                    <Row xs="1" lg="3">
                        <Col>
                        <Card className="cardPerfil ">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbaAA2G6opkLTTtKqkQ-ENplIhZFeJpHoH39SKK1KY0y2RqS_swET8IJqkrEFUW_lfiw&usqp=CAU" height={200}/>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text className="fw-bold fs-5">Producto1</Card.Text>
                            <Button variant="danger" href="/producto">Modificar este articulo</Button>
                        </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                        <Card className="cardPerfil">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbaAA2G6opkLTTtKqkQ-ENplIhZFeJpHoH39SKK1KY0y2RqS_swET8IJqkrEFUW_lfiw&usqp=CAU" height={200}/>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text className="fw-bold fs-5">Producto2</Card.Text>
                            <Button variant="danger" href="/producto">Modificar este articulo</Button>
                        </Card.Body>
                    </Card>
                        </Col>
                        <Col>
                        <Card className="cardPerfil">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbaAA2G6opkLTTtKqkQ-ENplIhZFeJpHoH39SKK1KY0y2RqS_swET8IJqkrEFUW_lfiw&usqp=CAU" height={200}/>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text className="fw-bold fs-5">Producto3</Card.Text>
                            <Button variant="danger" href="/producto">Modificar este articulo</Button>
                        </Card.Body>
                    </Card>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
        </Container>
        <div className="bg-dark text-light text-center p-4">
            <h5>Todos los derechos reservados.</h5>
        </div>
        </>
    );
};

export default Perfil;