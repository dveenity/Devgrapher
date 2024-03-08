import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div>
        <FaUser />
        <h2>About Me</h2>
      </div>
      <div>
        <p>
          Hi, My name is Similoluwa Ogundana Emmanuel and I am from Ekiti State,
          Nigeria.
        </p>
        <p>Click below to read more about me</p>
        <Link to="/aboutMe">
          <FaUser />
          More About Me
        </Link>
      </div>
    </div>
  );
};

export default About;
