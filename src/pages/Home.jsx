import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Process from "../components/Process";
import Projects from "../components/Project";
import BeforeAfter from "../components/BeforeAfter";
import Furniture from "../components/Furniture";
import Reviews from "../components/Review";
import EnquirtForm from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <BeforeAfter/>
      <Furniture />
      <Services/>
      <Process/>
      <Reviews />
      <EnquirtForm />
      <Footer />
    </>
  );
};

export default Home;
