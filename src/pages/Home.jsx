import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Offers from "../components/Offers";
import Companies from "../components/Companies";
import Process from "../components/Process";
import Projects from "../components/Project";
import BeforeAfter from "../components/BeforeAfter";
import Furniture from "../components/Furniture";
import Reviews from "../components/Review";
import EnquirtForm from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>
      <Offers/>
      <Companies/>

      <section id="projects">
        <Projects />
      </section>

      <section id="before-after">
        <BeforeAfter />
      </section>

      <section id="furniture">
        <Furniture />
      </section>


      <section id="process">
        <Process />
      </section>

      <section id="reviews">
        <Reviews />
      </section>

      <section id="contact">
        <EnquirtForm />
      </section>

      <Footer />
    </>
  );
};

export default Home;
