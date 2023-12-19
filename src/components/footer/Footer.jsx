import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3>
                <span> Retro </span>Groove
              </h3>
              <p>
                Sumérgete en el encanto nostálgico de nuestra tienda de música
                de segunda mano, donde los vinilos y CDs usados cuentan
                historias musicales olvidadas.
              </p>
            </div>
            <div className="footer-icons col-md-6 col-lg-3 col-12 ft-2">
              <h5>Nuestras Redes</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>Contacto:</h5>
              <p>
                <i class="fa-solid fa-phone-volume"></i> +56 987654321
              </p>
              <p>
                <i class="fa-solid fa-envelope"></i> contacto@retrogroove.com
              </p>
              <p>
                <i class="fa-solid fa-paper-plane"></i> Latam
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
