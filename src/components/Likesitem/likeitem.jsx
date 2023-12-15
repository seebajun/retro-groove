import React from "react";

const LikeItem = ({ productos }) => {
  return (
    <div className="like-item">
      <img src={productos.imagen} alt={productos.nombre} />
      <div className="like-text">
        <h3>{productos.nombre}</h3>
      </div>
    </div>
  );
};

export default LikeItem;
