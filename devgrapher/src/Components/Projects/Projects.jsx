import { MdWindow } from "react-icons/md";
import { FaRegWindowMinimize } from "react-icons/fa";
import { Link } from "react-router-dom";

//import project images
import ProjectOne from "../../assets/Images/agro.png";

const Projects = () => {
  // putting each project details into an array and mapping into dom
  const projects = [
    {
      image: ProjectOne,
      title: "Agro Farmer's Hub",
      description:
        "A Full Stack web app where farmers can post their products and users can place orders for those products",
      link: "/projectOne",
      techs: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "CSS"],
    },
  ];

  // Define an array of colors for tools
  const toolColors = ["orange", "blue", "yellow", "green", "var(--black)"];

  // mapping projects into the dom
  const projectList = projects.map((project, i) => (
    <li key={i} className="projectList">
      <Link to={project.link}>
        <img src={project.image} alt={project.title} />
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul>
            {project.techs.map((tech, index) => (
              <li key={index} style={{ color: toolColors[index] }}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </li>
  ));

  return (
    <div className="projects">
      <div>
        <FaRegWindowMinimize />
      </div>
      <div>
        <div>
          <MdWindow />
          <h2>Featured Projects</h2>
          <div>
            <p>
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos in it. It reflects
              my ability to solve complex problems, work with different
              technologies, and manage projects effectively.
            </p>
            <p>
              Click on each project to read more info and explore it live...
            </p>
          </div>
        </div>
        <ul className="projectOutput">{projectList}</ul>
      </div>
    </div>
  );
};

export default Projects;
