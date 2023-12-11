import "./login.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [usuario, setUsuario] = useState({
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

  const handleLogin = async () => {
    const urlServer = "http://localhost:3001";
    const endpoint = "/login";

    try {
      console.log("fetching/login");
      const response = await fetch(urlServer + endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        alert(errorMessage.message + " 🙁");
        console.log(errorMessage);
        return;
      }

      const { data: token } = await response.json();
      alert("Usuario identificado con éxito 😀");
      localStorage.setItem("token", token);

      // Redireccionar al usuario a la página principal u otra vista
      navigate("/"); // Cambia '/' según sea necesario
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert(
        "Hubo un error al intentar iniciar sesión. Por favor, inténtalo de nuevo. 🙁"
      );
    }
  };

  useEffect(() => {
    const imagen = document.getElementById("imagen");

    const handleMouseEnter = () => {
      // Lógica al pasar el cursor sobre la imagen (opcional)
      console.log("Mouse enter");
    };

    const handleMouseLeave = () => {
      // Lógica al salir el cursor de la imagen (opcional)
      console.log("Mouse leave");
    };

    // Agregar event listeners
    imagen.addEventListener("mouseenter", handleMouseEnter);
    imagen.addEventListener("mouseleave", handleMouseLeave);

    // Limpiar event listeners al desmontar el componente
    return () => {
      imagen.removeEventListener("mouseenter", handleMouseEnter);
      imagen.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []); // El array vacío garantiza que este efecto se ejecute solo una vez al montar el componente

  return (
    <>
      <div className="imagen-fondo">
        <img
          src="https://assets.stickpng.com/images/5856b3da4f6ae202fedf2794.png"
          alt="Imagen"
          className="imagen-movil"
          id="imagen"
        />
      </div>

      <div className="card-login">
        <div className="card-body">
          <div className="titulo">
            <h1 className="card-tittle">Bienvenido!</h1>
          </div>
          <br />
          <h4>Iniciar Sesión</h4>
          <br />
          <form>
            <div className="email pb-5">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={usuario.email}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="password pb-5">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={usuario.password}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <button
                type="button"
                onClick={handleLogin}
                className="btn btn-outline-dark btn-lg"
              >
                Ingresar
              </button>
            </div>
          </form>
          <p className="link mt-3">
            ¿Aún no tienes cuenta? <Link to="/registrarse">Regístrate</Link>{" "}
            para empezar.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
