import React from "react";
import "./likeitem.css";
import { useNavigate } from "react-router-dom";

const LikeItem = ({ productos }) => {
  const navigate = useNavigate();
  return (
    
    <div className="likeitem-container">
    <div className="like-item" onClick={() => navigate(`/producto/${productos.titulo}`)}>
      <img src={productos.imagen} alt={productos.titulo} />
      <div className="like-text">
        <h3>{productos.titulo}</h3>
      </div>
    </div>
    </div>
  );
};

export default LikeItem;
