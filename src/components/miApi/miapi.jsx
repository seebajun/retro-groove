import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from "axios";
// import Context from "../../context/index";

function Posts() {
    // mostrar landing2 en cards
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    // const { user } = useContext(Context);
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    const urlServer = "http://localhost:2999";
    const endpoint = "/landing";
    console.log("Token:", token);
    const handleGetPosts = async () => {
        try {
            const response = await axios.get(urlServer + endpoint, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("response", response.data);
            setPosts(response.data);
        } catch (error) {
            console.error("Error en la solicitud:", error);
            alert("Hubo un error al cargar los productos. Por favor, inténtalo de nuevo. 🙁");
        }
    };
    useEffect(() => {
        handleGetPosts();
    }, []); 
    return (
        <div className="miContainer">
            <Container>
            <Row>
                {posts.map((post) => (
                    <Col key={post._id} xs={12} sm={6} md={4} lg={3}>
                        <Card className="card">
                            <Card.Img variant="top" src={post.imagen} height={250}/>
                            <Card.Body>
                                <Card.Title>{post.titulo}</Card.Title>
                                <Card.Text>{post.formato}</Card.Text>
                                <Card.Text className="fw-bold">${post.precio}</Card.Text>
                                <Button variant="" className="btn btn-outline-dark" onClick={() => navigate(`/producto/${post.titulo}`)}>Ver más</Button>
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
