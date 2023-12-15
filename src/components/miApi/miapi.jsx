import { useEffect, useState, useContext } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import Context from "../../context/index";

function Posts() {
    // mostrar landing2 en cards
    // const { productos } = useContext(Context);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        setLoading(true);
        setError(false);
        const getProducts = async () => {
            try {
                const response = await fetch("localhost:3000/landing2/");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(true);
            }
            setLoading(false);
        };
        getProducts();
    }, []);
    

    return (
        <div>
            <Container>
                <Row>
                    {loading && <p>Cargando...</p>}
                    {error && <p>Hubo un error</p>}
                    {products.map((product) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
                            <Card>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
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

export default Posts;
