import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavB from "../../components/Navbar/navbar";
import Posts from "../../components/miApi/miapi";
import Hero from "../../components/hero/hero";
import Footer from "../../components/footer/Footer";
import swal from "sweetalert";
import "./landing.css";


const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      swal("Debes iniciar sesión para vender productos.");
      navigate('/');
    }
  }, []);

  return (
    <>
      <NavB />
      <Hero />
      <Posts />
      <Footer />
    </>
  );
};

export default Landing;
