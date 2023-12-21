import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import MyContext from "../../context/index";
import Navb from "../../components/Navbar/navbar";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom"; // Agrega esta línea para usar navigate

const Carrito = () => {
  const { carrito, setCarrito, total, setTotal } = useContext(MyContext);
  const navigate = useNavigate(); // Agrega esta línea para usar navigate

  const agregarProducto = (producto) => {
    let item = carrito.find((x) => x.id === producto.id);

    if (!item) {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    } else {
      let clone = [...carrito];
      let index = clone.findIndex((x) => x.id === producto.id);
      clone[index].cantidad++;
      setCarrito(clone);
    }
    calcularTotal();
  };

  const calcularTotal = () => {
    let resultado = 0;
    carrito.forEach((item) => (resultado += item.cantidad * item.precio));
    setTotal(resultado);
  };

  const subproducto = (id) => {
    let item = carrito.find((x) => x.id === id);

    if (item && item.cantidad > 0) {
      let clone = [...carrito];
      let index = clone.findIndex((x) => x.id === id);
      clone[index].cantidad--;
      setCarrito(clone);
    }
    calcularTotal();
  };

  const irAPagar = () => {
    // Agrega lógica para navegar a la página de pago
    navigate("/ruta_de_pago"); // Reemplaza con la ruta correcta
  };

  return (
    <>
      <Navb />
      <p className="fs-4 fw-semibold">Detalles del pedido:</p>
      <ul className="carrito-container">
        {carrito.map((producto) => (
          <div className="carrito-info" key={producto.id}>
            <div className="carrito-info1">
              <img src={producto.imagen} alt={producto.nombre} />
              <p>{producto.nombre}</p>
              <p>{producto.precio * producto.cantidad}</p>
            </div>
            <div className="carrito-info2">
              <Button
                variant="danger"
                onClick={() => agregarProducto(producto.id)}
              >
                +
              </Button>
              <span>{producto.cantidad}</span>
              <Button variant="danger" onClick={() => subproducto(producto.id)}>
                -
              </Button>
            </div>
          </div>
        ))}
      </ul>
      <br />
      <div className="carrito-total">
        <h1>Total: ${total}</h1>
        <Button onClick={irAPagar}>Ir a pagar</Button>
      </div>
      <Footer />
    </>
  );
};

export default Carrito;
