import React, { useState } from "react";
import "./index.css";




const Login = () => {
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    const urlServer = "http://localhost:3000";
    const endpoint = "/login";

    try {
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
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert(
        "Hubo un error al intentar iniciar sesión. Por favor, inténtalo de nuevo. 🙁"
      );
    }
  };

  return (
    <div className="login-container col-6">
      <div className="card">
        <div className="card-body">
          <div className="titulo">
          <h1 className="card-tittle">Bienvenido!</h1>
          </div>
          <h2>Iniciar Sesión</h2>
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
            <button
              type="button"
              onClick={handleLogin}
              className="btn btn-primary"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
