import { Suspense, lazy, useEffect } from "react";
const LazyAboutAnim = lazy(() => import("../Animations/AboutAnim.jsx"));
import HeaderTopGoBack from "../Custom/HeaderTopGoBack";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJenkins,
  FaPython,
  FaRegFaceSmileWink,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiCplusplus,
  SiGnubash,
  SiMicrosoftoffice,
  SiOpenverse,
  SiOpenvpn,
  SiOverleaf,
  SiOwasp,
  SiPowershell,
  SiSplunk,
  SiVmware,
  SiWireguard,
  SiWireshark,
} from "react-icons/si";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../swiper.css";

// import required modules
import { Autoplay } from "swiper/modules";

//import images
import imageOne from "../../assets/Images/man.jpg";
import LoadingSpin from "../Animations/LoadingSpin.jsx";

const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // create array of skills and map into list
  const skills = [
    { icon: <FaHtml5 style={{ color: "orangered" }} /> },
    { icon: <FaCss3 style={{ color: "blue" }} /> },
    { icon: <IoLogoJavascript style={{ color: "yellow" }} /> },
    { icon: <FaPython style={{ color: "purple" }} /> },
    { icon: <SiCplusplus style={{ color: "blue" }} /> },
    { icon: <SiMicrosoftoffice style={{ color: "brown" }} /> },
    { icon: <FaAws style={{ color: "yellow" }} /> },
    { icon: <FaGitAlt style={{ color: "brown" }} /> },
    { icon: <FaGithub style={{ color: "var(--black)" }} /> },
    { icon: <SiPowershell style={{ color: "navy" }} /> },
    { icon: <FaDocker style={{ color: "blue" }} /> },
    { icon: <FaJenkins style={{ color: "brown" }} /> },
    { icon: <SiGnubash style={{ color: "var(--black)" }} /> },
    { icon: <SiOverleaf style={{ color: "green" }} /> },
    { icon: <SiOpenverse style={{ color: "yellow" }} /> },
    { icon: <SiWireshark style={{ color: "purple" }} /> },
    { icon: <SiVmware style={{ color: "orangered" }} /> },
    { icon: <SiOwasp style={{ color: "brown" }} /> },
    { icon: <SiSplunk style={{ color: "var(--black)" }} /> },
    { icon: <SiOpenvpn style={{ color: "orange" }} /> },
    { icon: <SiWireguard style={{ color: "blue" }} /> },
  ];

  const skillsOut = skills.map((skill, i) => <li key={i}>{skill.icon}</li>);

  return (
    <div className="abutMe">
      <HeaderTopGoBack />
      <div className="aboutMe-div">
        <h2>
          Get to <span>know</span> me!
        </h2>
        <div>
          <p>
            Greetings! I&apos;m <span>Similoluwa Ogundana Emmanuel</span>{" "}
            hailing from Ekiti State, Nigeria. With a background in{" "}
            <span>Devops</span> and <span>Penetration Testing</span>, I bring
            over two years of valuable experience to the table.
          </p>
          <p>
            During my internship at
            <span> ALX Africa</span>, I honed my skills as a{" "}
            <span>software engineer</span>. My passion lies in crafting and
            collaborating on original projects, ensuring they boast exceptional
            user interfaces. Explore some of my noteworthy work in the projects
            section
          </p>
          <p>
            <span>Open</span> to fresh collaborations and opportunities that
            allow me to contribute and cultivate my expertise, I invite you to
            connect with me. You can find relevant links in the header.
            Let&apos;s build something remarkable together!
          </p>
        </div>
        <div>
          <Suspense fallback={<LoadingSpin />}>
            <LazyAboutAnim />
          </Suspense>
        </div>
        <div>
          <h2>Professional Skills</h2>
          <ul>{skillsOut}</ul>
        </div>
        <div>
          <h2>
            Reviews from people <FaRegFaceSmileWink />
          </h2>
          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper">
              <SwiperSlide className="swiperSlide">
                <div>
                  <img src={imageOne} alt="man" />
                  <div>
                    <h4>Josh Bradley</h4>
                    <h5>C.E.O</h5>
                  </div>
                </div>
                <p>
                  Working with Similoluwa was an absolute pleasure. Their
                  attention to detail and commitment to delivering high-quality
                  work is commendable. They not only met but exceeded our
                  expectations in terms of design, functionality, and
                  responsiveness. I highly recommend Similoluwa for any web
                  development project
                </p>
              </SwiperSlide>
              <SwiperSlide className="swiperSlide">
                <div>
                  <img src={imageOne} alt="man" />
                  <div>
                    <h4>Josh Bradley</h4>
                    <h5>C.E.O</h5>
                  </div>
                </div>
                <p>
                  Working with Similoluwa was an absolute pleasure. Their
                  attention to detail and commitment to delivering high-quality
                  work is commendable. They not only met but exceeded our
                  expectations in terms of design, functionality, and
                  responsiveness. I highly recommend Similoluwa for any web
                  development project
                </p>
              </SwiperSlide>
              <SwiperSlide className="swiperSlide">
                <div>
                  <img src={imageOne} alt="man" />
                  <div>
                    <h4>Josh James</h4>
                    <h5>C.E.O</h5>
                  </div>
                </div>
                <p>
                  Working with Similoluwa was an absolute pleasure. Their
                  attention to detail and commitment to delivering high-quality
                  work is commendable. They not only met but exceeded our
                  expectations in terms of design, functionality, and
                  responsiveness. I highly recommend Similoluwa for any web
                  development project
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
