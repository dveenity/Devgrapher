import { FaFilePdf } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PiScroll } from "react-icons/pi";
import Resume from "../../assets/Images/resume.pdf";
import CoverLetter from "../../assets/Images/resumecover.pdf";

const About = () => {
  // create pdf Files object array and map into dom
  const pdfFiles = [
    { name: "Resume", icon: <FaFilePdf />, file: Resume },
    { name: "Cover Letter", icon: <PiScroll />, file: CoverLetter },
  ];

  const pdfOutput = pdfFiles.map((pdf, i) => (
    <a key={i} href={pdf.file} download>
      {pdf.icon}
      {pdf.name}
    </a>
  ));
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
      <div>
        <h3>Download my files</h3>
        <div>{pdfOutput}</div>
      </div>
    </div>
  );
};

export default About;
