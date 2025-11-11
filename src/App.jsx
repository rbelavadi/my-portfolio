import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Starfield from "./components/Starfield";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      duration: 800,
      easing: "ease-out-cubic",
      offset: 120,
    });
  }, []);

  return (
    <div
      className="min-h-screen text-white flex flex-col items-center justify-center"
      style={{
        backgroundColor: "#0b0b13",
        backgroundImage:
          "radial-gradient(circle at 30% 30%, rgba(109,40,217,0.15), transparent 70%)",
      }}
    >
      <Navbar />
      <Starfield />
      <Hero />
      <div className="mt-32" />
      <Skills />
      <div className="mt-32" />
      <Projects />
      <div className="mt-32" />
      <Experience />
      <div className="mt-32" />
      <About />
      <div className="mt-32" />
      <Contact />
    </div>
  );
}
