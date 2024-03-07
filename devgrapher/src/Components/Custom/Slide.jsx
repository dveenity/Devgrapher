import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

const Slide = () => {
  return (
    <div className="slide-up">
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default Slide;
