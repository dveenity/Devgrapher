import { Suspense, lazy, useEffect } from "react";
const LazyAboutAnim = lazy(() => import("../Animations/AboutAnim.jsx"));
import StarField from "../Animations/StarField";
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
import Night from "../Animations/Night.jsx";

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
      <Night />
      <Night />
      <Night />
      <HeaderTopGoBack />
      <div className="aboutMe-div">
        <h2>
          Get to <span>know</span> me!
        </h2>
        <div>
          <p>
            Hi, my name is <span>Similoluwa Ogundana Emmanuel</span> and i am
            from Ekiti State, Nigeria. I&apos;m a <span>Devops</span> and a{" "}
            <span>Penetration Tester</span> with over two years of experience.
          </p>
          <p>
            I have done an internship as a <span>software engineer</span> at
            <span> ALX Africa</span>. I love to create and collaborate original
            projects with amazing user interfaces. You can check out some of my
            work in the projects section
          </p>
          <p>
            I am <span>open</span> to new collaborations or work where i can
            contribute and grow. Feel free to connect with me, links are in the
            header.
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
