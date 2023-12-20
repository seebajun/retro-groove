import React, { useState } from "react";
import "./registrarse.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Registro = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };

  const handleRegistro = async () => {
    const urlRegistro = "http://localhost:2999";
    const endpoint = "/registrarse";

    try {
      console.log("axios registro");
      const response = await axios.post(urlRegistro + endpoint, usuario, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.data || response.status !== 201) {
        throw new Error("Error en la solicitud de registro");
      }

      // Manejar la respuesta exitosa del servidor
      alert("Usuario registrado correctamente :)");
      // Puedes realizar acciones adicionales, como redirigir al usuario a la página de inicio de sesión
      navigate("/landing");
    } catch (error) {
      // Manejar errores en la solicitud
      alert("Error en la solicitud de registro");
      console.error("Error en la solicitud:", error);
      // Puedes mostrar un mensaje de error al usuario
    }
  };

  return (
    <div className="contenedor body">
      <div className="card-registrarse">
        <div className="titulo-registrarse">
          <h1>Registrarse</h1>
        </div>
        <form>
          <div className="nombre pb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre:
            </label>
            <input
              type="name"
              name="nombre"
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="nombre ">
            <label htmlFor="apellido" className="form-label">
              Apellido
            </label>
            <input
              type="name"
              name="apellido"
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="email pb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="password pb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={handleRegistro}
            >
              Registrarse
            </button>
          </div>
        </form>
        <p className="mt-3">
          ¿Ya tienes una cuenta? <Link to="/">Entra!</Link>
        </p>
      </div>
    </div>
  );
};

export default Registro;
