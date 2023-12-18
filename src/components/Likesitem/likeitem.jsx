import React from "react";

const LikeItem = ({ productos }) => {
  return (
    <div className="like-item">
      <img src={productos.imagen} alt={productos.titulo} />
      <div className="like-text">
        <h3>{productos.titulo}</h3>
      </div>
    </div>
  );
};

export default LikeItem;
