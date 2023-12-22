import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import NavB from "../../components/Navbar/navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";

import axios from "axios";
import swal from "sweetalert";
import "./index.css";

const Producto = () => {
  const navigate = useNavigate();
  const { titulo } = useParams();
  const [producto, setProducto] = useState({
    titulo: "",
    descripcion: "",
    formato: "",
    imagen: "",
    precio: 0,
  });

  useEffect(() => {
    const obtenerProducto = async () => {
      const urlServer = "http://retrogrooveapi.onrender.com";
      const endpoint = `/producto/${titulo}`;
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(urlServer + endpoint, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setProducto(response.data);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };
    obtenerProducto();
  }, [titulo]);

  const agregarAFavoritos = async () => {
    const urlServer = "https://retrogrooveapi.onrender.com/";
    const endpointTitulo = `/producto/${titulo}`;
    const token = localStorage.getItem("token");

    try {
      const responseIdProducto = await axios.get(urlServer + endpointTitulo, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const endpointFavoritos = "/favoritos/";
      const verificarFavorito = await axios.get(urlServer + endpointFavoritos, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const productoEnFavoritos = verificarFavorito.data.find(
        (favorito) => favorito.id_productos === responseIdProducto.data.id
      );

      if (productoEnFavoritos) {
        swal("Ya lo tienes!", "El producto ya existe en favoritos", "warning");
      } else {
        await axios.post(
          urlServer + endpointFavoritos + `${responseIdProducto.data.id}`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Producto agregado a favoritos correctamente");
        swal(
          "Excelente!",
          "Producto agregado a favoritos correctamente",
          "success"
        );
      }
    } catch (error) {
      console.error("Error al agregar producto a favoritos:", error);
    }
  };

  const agregarAlCarrito = async () => {
    const urlServer = "https://retrogrooveapi.onrender.com/";
    const endpointTitulo = `/producto/${titulo}`;
    const token = localStorage.getItem("token");

    try {
      const responseIdProducto = await axios.get(urlServer + endpointTitulo, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const endpointCarrito = "/carrito/";
      const verificarEnCarrito = await axios.get(urlServer + endpointCarrito, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("ID del producto:", responseIdProducto.data.id);
      console.log("Productos en el carrito:", verificarEnCarrito.data);

      const productoEnCarrito = verificarEnCarrito.data.find(
        (item) => item.id_productos === responseIdProducto.data.id
      );

      console.log("Producto encontrado en carrito:", productoEnCarrito);

      if (productoEnCarrito) {
        swal(
          "Ya está en el carrito",
          "El producto ya existe en el carrito",
          "warning"
        );
      } else {
        await axios.post(
          urlServer + endpointCarrito + `${responseIdProducto.data.id}`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Producto agregado al carrito correctamente");
        swal(
          "Excelente!",
          "Producto agregado al carrito correctamente",
          "success"
        );
      }
    } catch (error) {
      console.error("Error al agregar producto al carrito:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      swal("Debes iniciar sesión para vender productos.");
      navigate("/");
    }
  }, []);

  return (
    <>
      <NavB />
      <div className="contenedor body">
        <div key={producto.id} className="contenedorCard">
          <div className="cardContent">
            <img src={producto.imagen} alt={producto.titulo} width={500} />
            <div className="cardText">
              <h1>{producto.titulo}</h1>
              <h5>{`Descripcion: ${producto.descripcion}`}</h5>
              <h5>{`Precio: $${producto.precio}`}</h5>
              <div className="botones">
                <Button
                  variant="btn btn-dark btn-lg"
                  onClick={agregarAlCarrito}
                >
                  <i class="fa-solid fa-cart-shopping"></i>
                </Button>
                <Button
                  variant="btn btn-dark btn-lg"
                  onClick={agregarAFavoritos}
                >
                  <i class="fa-solid fa-star"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Producto;
