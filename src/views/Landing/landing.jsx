import NavB from "../../components/Navbar/navbar";
import "./landing.css";
import Posts from "../../components/miApi/miapi";
import Hero from "../../components/hero/hero";
import Footer from "../../components/footer/Footer";

const Landing = () => {
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
