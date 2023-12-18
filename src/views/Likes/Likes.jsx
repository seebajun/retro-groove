import React, { useEffect, useState } from "react";
import LikeItem from "../../components/Likesitem/likeitem";
import Navbar from "../../components/Navbar/navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./likes.css";

const Likes = () => {
  const [likes, setLikes] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("Token:", token);
  const urlServer = "http://localhost:2999";
  const endpoint = "/favoritos";
  console.log("Token:", token);
  const handleGetLikes = async () => {
    try {
      const response = await axios.get(urlServer + endpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response", response.data);
      setLikes(response.data);
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert(
        "Hubo un error al cargar los productos. Por favor, inténtalo de nuevo. 🙁"
      );
    }
  };
  useEffect(() => {
    handleGetLikes();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Debes iniciar sesión para vender productos.");
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="miContainer">
        <div className="like-container">
          {likes.map((productos) => (
            <LikeItem key={productos._id} productos={productos} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Likes;
