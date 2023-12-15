import React, { useEffect, useState } from "react";
import LikeItem from "../../components/Likesitem/likeitem"; // Ajusta la ruta según tu estructura

const Likes = () => {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const obtenerLikes = async () => {
      try {
        const response = await fetch("http://localhost:2999/likes", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Error al obtener los likes");
        }

        const data = await response.json();
        setLikes(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    obtenerLikes();
  }, []);

  return (
    <div className="likes-container">
      <h1>Tus Likes</h1>
      {likes.map((producto) => (
        <LikeItem key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default Likes;
