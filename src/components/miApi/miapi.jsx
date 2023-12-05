import { useEffect, useState, useContext } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Context from "../../context/index";

function Posts() {

    const {data} = useContext(Context);
    const jsonMap = data;
    const [buscador, setBuscador] = useState("")
    // const [filtroPost, setFiltroPost] = useState([])

    // useEffect(() => {
    //     const minusculaBuscador = buscador.toLowerCase();
    //     setFiltroPost(
    //         posts.filter((publi) =>
    //             publi.name.toLowerCase().includes(minusculaBuscador)
    //         )
    //     );
    // }, [buscador, posts]);

    const filtrar = jsonMap;

    return (
        <div className="miContainer text-center">
            <h1>Explora todas las publicaciones</h1>
            <input
            type="text"
            className="form-control mx-auto mt-4 w-75"
            placeholder="Busca un artista, album o genero"
            value={buscador}
            onChange={(e) => setBuscador(e.target.value)}
            />
            <Container id="contenedor">
                <Row>
                    {filtrar.map((publi) => (
                        <Col xs={12} md={6} lg={3}>
                            <Card style={{ width:'17rem'}} className="card">
                                <Card.Img variant="top" src={publi.url} height={200}/>
                                <Card.Body>
                                    <Card.Title>{publi.nombre}</Card.Title>
                                    <Card.Text className="fw-bold fs-5">${publi.precio}</Card.Text>
                                    <Button variant="danger" href="/producto">Ver más</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div> 
    );
}

export default Posts;
