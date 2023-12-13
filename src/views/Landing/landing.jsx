import NavB from "../../components/Navbar/navbar";

import "./landing.css";
import Posts from "../../components/miApi/miapi";
import Hero from "../../components/hero/hero";

const Landing = () => {
  return (
    <>
      <NavB />
      <Hero />
      <Posts />
      <div className="bg-dark text-light text-center p-4">
        <h5>Todos los derechos reservados.</h5>
      </div>
    </>
  );
};

export default Landing;
