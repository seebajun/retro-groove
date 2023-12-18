import React from "react";
import "./likeitem.css";
import { useNavigate } from "react-router-dom";

const LikeItem = ({ productos }) => {
  const navigate = useNavigate();
  return (
    <div
      className="like-item"
      onClick={() => navigate(`/producto/${productos.titulo}`)}
    >
      {" "}
      <div className="info-like">
        <div className="like-imagen">
          <img src={productos.imagen} alt={productos.titulo} />
        </div>
        <div className="like-text">
          <h2>{productos.titulo}</h2>
        </div>
      </div>
    </div>
  );
};

export default LikeItem;
