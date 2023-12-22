import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

const CarritoItem = ({ productos }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const urlServer = "http://retrogrooveapi.onrender.com";
  const endpointEliminarProducto = `/carrito/${productos.id_productos}`;

  const handleEliminarProducto = async () => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminarlo",
      cancelButtonText: "Cancelar",
    });

    if (!result.isConfirmed) {
      return;
    }

    try {
      await axios.delete(urlServer + endpointEliminarProducto, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      Swal.fire("¡Eliminado!", "El producto ha sido eliminado.", "success");
      window.location.reload();
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      Swal.fire(
        "Error",
        "Hubo un error al eliminar el producto. Por favor, inténtalo de nuevo.",
        "error"
      );
    }
  };

  return (
    <div className="padre">
      <div className="carrito-container">
        <div className="carrito-item">
          <img
            src={productos.imagen}
            alt={productos.titulo}
            onClick={() => navigate(`/producto/${productos.titulo}`)}
          />
          <div className="carrito-text">
            <h1 className="mb-3">{productos.titulo}</h1>
            <h1 className="mb-3">${productos.precio}</h1>
          </div>
          <div className="carrito-boton">
            <Button
              variant="danger"
              className="ml-auto"
              onClick={handleEliminarProducto}
            >
              <i className="fa-solid fa-trash"></i> Eliminar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarritoItem;
