import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";

const LikeItem = ({ productos }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const urlServer = "http://retrogrooveapi.onrender.com";
  const endpointEliminarFavorito = `/favoritos/${productos.id_productos}`;

  const handleEliminarFavorito = async () => {
    try {
      await axios.delete(urlServer + endpointEliminarFavorito, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      // alert("Producto eliminado de favoritos correctamente");
      swal(
        "Excelente!",
        "Producto eliminado de favoritos correctamente 😀",
        "success"
      );
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error("Error al eliminar favorito:", error);
      alert(
        "Hubo un error al eliminar el producto de favoritos. Por favor, inténtalo de nuevo." +
          error
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
              onClick={handleEliminarFavorito}
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
