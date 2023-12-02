import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Digimons() {

    const [digimones, setDigi] = useState([])
    const [buscador, setBuscador] = useState("")
    const [filtroDigi, setFiltroDigi] = useState([])

    const consultar = async() => {
        let url ='https://digimon-api.vercel.app/api/digimon/level/mega'
        let consulta = await fetch(url)
        let resultado = await consulta.json()
        setDigi(resultado)
    }

    useEffect(() => {
        consultar()
    }, [])

    useEffect(() => {
        const minusculaBuscador = buscador.toLowerCase();
        setFiltroDigi(
            digimones.filter((digimon) =>
                digimon.name.toLowerCase().includes(minusculaBuscador)
            )
        );
    }, [buscador, digimones]);

    const digimonActual = filtroDigi

    return (
        <div className="text-center">
            <h1 className="mt-5" id="search">Explora todas las publicaciones</h1>
            <input
                type="text"
                className="form-control mx-auto w-50 mt-4"
                placeholder="Busca un artista, album o genero"
                value={buscador}
                onChange={(e) => setBuscador(e.target.value)}
            />
            <Container className="mt-5">
                <Row>
                {digimonActual.map((digimon) => (
                            <Col>
                            <Card style={{ width:'18rem'}} className="mt-3">
                            <Card.Img variant="top" src="https://media.istockphoto.com/id/1288129966/vector/missing-image-camera-icon-holder.jpg?s=612x612&w=0&k=20&c=lS0bO1NFByUZ47ANnYF3Hcey-JAZO-Mx3cY4WrT228Q="/>
                            <Card.Body>
                                <Card.Title>Titulo del producto</Card.Title>
                                <Card.Text className="fw-bold fs-5">$420</Card.Text>
                                <Button variant="primary">Ver más</Button>
                            </Card.Body>
                            </Card>
                            </Col>
                ))}
                </Row>
            </Container>
        </div>
        
    );
}

export default Digimons;
