import { useEffect, useState } from "react";
// import './landing.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Posts() {

    const [posts, setPosts] = useState([])
    const [buscador, setBuscador] = useState("")
    const [filtroPost, setFiltroPost] = useState([])

    const consultar = async() => {
        let url ='https://digimon-api.vercel.app/api/digimon/level/intraining'
        let consulta = await fetch(url)
        let resultado = await consulta.json()
        setPosts(resultado)
    }

    useEffect(() => {
        consultar()
    }, [])

    useEffect(() => {
        const minusculaBuscador = buscador.toLowerCase();
        setFiltroPost(
            posts.filter((publi) =>
                publi.name.toLowerCase().includes(minusculaBuscador)
            )
        );
    }, [buscador, posts]);

    const filtrar = filtroPost

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
                        <Col>
                            <Card style={{ width:'18rem'}} className="card">
                                <Card.Img variant="top" src="https://www.metalkingdom.net/album-photo/2018/03/1229-Necrophagist-Epitaph.jpg"/>
                                <Card.Body>
                                    <Card.Title>Necrophagist - Epitaph</Card.Title>
                                    <Card.Text className="fw-bold fs-5">$420</Card.Text>
                                    <Button variant="primary" href="/producto">Ver más</Button>
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
