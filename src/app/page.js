import "../css/style.css";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Services from "../components/services";
import Projects from "src/components/projects";
import Contact from "src/components/contact";
import Footer from "src/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
