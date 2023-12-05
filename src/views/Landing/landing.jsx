import NavB from "../../components/Navbar/navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Posts from "../../components/miApi/miapi";
import Hero from "../../components/hero/hero";
import './landing.css';


const Landing = () =>{
    return(
    <>
        <NavB />
        <Hero />
        <Posts />
        <div className="bg-dark text-light text-center p-4"><h5>Todos los derechos reservados.</h5></div>
    </>
        
    );
};

export default Landing;