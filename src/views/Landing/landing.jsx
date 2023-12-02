import NavB from "../../components/Navbar/index";
import './landing'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Digimons from "../../components/miApi/miapi";
import Hero from "../../components/hero/hero";


const Landing = () =>{
    return(
    <>
        <NavB />
        <Hero />
        <Digimons />
    </>
        
    );
};

export default Landing;