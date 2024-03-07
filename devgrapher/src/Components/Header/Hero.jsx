import { Typewriter } from "react-simple-typewriter";
import StarField from "../Animations/StarField";
import SpaceBoyAnim from "../Animations/SpaceBoyAnim";
import { FaGithub, FaLinkedinIn, FaPhone, FaXTwitter } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import { Link } from "react-router-dom";

const Hero = () => {
  // create array object of socials and map into list
  const socials = [
    { link: "https://x.com/ceemie_lol?s=21", icon: <FaXTwitter /> },
    { link: "https://github.com/TheGrapher", icon: <FaGithub /> },
    { link: "https://wa.me/+2349137422509", icon: <FaPhone /> },
    {
      link: "https://linkedin.com/in/similoluwa-ogundana-48a092202",
      icon: <FaLinkedinIn />,
    },
  ];

  const socialsOut = socials.map((social, i) => (
    <li key={i}>
      <Link to={social.link}>{social.icon}</Link>
    </li>
  ));

  const mail = "similoluwaogundana114@gmail.com";

  return (
    <div className="hero">
      <StarField />
      <div className="hero-main">
        <div className="hero-main-one">
          <h2>
            <div>Hi There!</div>
            <div>
              I&apos;m <span>Similoluwa Ogundana</span>
            </div>
            <div style={{ color: "red" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Software Engineer",
                  "Cyber Security",
                  "DevOps Engineer",
                  "Penetration Tester",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </h2>
          <div>
            <ul>{socialsOut}</ul>
            <Link to={mail}>
              <LuMessagesSquare />
              Let&apos;s Talk
            </Link>
          </div>
        </div>
        <SpaceBoyAnim />
      </div>
    </div>
  );
};

export default Hero;
