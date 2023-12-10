import NavB from "../../components/Navbar/index";
import Form from 'react-bootstrap/Form';
import './perfil.css'


const Perfil = () =>{
    return(
        
        <>
        <NavB />
        <div className="miContenedor">
        <h1 className="text-center py-3">Mi perfil</h1>
        <div className="cardPerfil">
        <Form>
            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Mi nombre" readOnly disabled className="mb-3"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Mi email" readOnly disabled className="mb-3"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Clave</Form.Label>
                <Form.Control type="password" placeholder="Mi clave" readOnly disabled className="mb-3"/>
            </Form.Group> 
        </Form>
        </div>
        </div>
        </>
    );
};

export default Perfil;