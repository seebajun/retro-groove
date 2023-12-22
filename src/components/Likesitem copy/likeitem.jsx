import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

const LikeItem = ({ productos }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const urlServer = "https://retrogrooveapi.onrender.com";
  const endpointEliminarProducto = `/producto/${productos.id}`;

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
      <div className="likeitem-container">
        <div className="like-item">
          <img
            src={productos.imagen}
            alt={productos.titulo}
            onClick={() => navigate(`/producto/${productos.titulo}`)}
          />
          <div className="like-text d-flex flex-column">
            <h3 className="mb-3">{productos.titulo}</h3>
            <Button
              variant="danger"
              className="fs-6"
              onClick={handleEliminarProducto}
            >
              <i className="fa-solid fa-trash"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeItem;
