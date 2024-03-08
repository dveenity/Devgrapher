import { useEffect } from "react";
import HeaderTopGoBack from "../Custom/HeaderTopGoBack";
import { TbPointFilled } from "react-icons/tb";
import { IoEarth } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../swiper.css";

// import required modules
import { Autoplay } from "swiper/modules";

//importing project images for slideshow
import FirstImage from "../../assets/Images/agro.png";
import SecondImage from "../../assets/Images/agro2.png";
import ThirdImage from "../../assets/Images/agro3.png";

const ProjectOne = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const live = `https://agro-farmers-hub.vercel.app/`;
  const github = `https://github.com/dveenity/farmers-hub`;

  return (
    <div className="project-click">
      <HeaderTopGoBack />
      <div className="project-click-details">
        <h2>Agro Farmer&apos;s Hub</h2>
        <div className="p-swipe">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper">
            <SwiperSlide>
              <img alt="project sample image" src={FirstImage} loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="project sample image"
                src={SecondImage}
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="project sample image" src={ThirdImage} loading="lazy" />
            </SwiperSlide>
          </Swiper>
          <ul>
            <li style={{ color: "var(--black)" }}>#ReactJS</li>
            <li style={{ color: "orange" }}>#NodeJS</li>
            <li style={{ color: "var(--black)" }}>#Express</li>
            <li style={{ color: "green" }}>#MongoDB</li>
          </ul>
        </div>
        <div className="p-outline">
          <div>
            <h3>What I did;</h3>
            <ul>
              <li>
                <p>
                  <TbPointFilled />
                  As a dedicated Software Engineer, I spearheaded a
                  transformative project titled Enhancing Digital Inclusion in
                  Agro-processing through Agile Scrum: A Web App Solution for
                  Small and Medium Fish Farming Enterprises in Nigeria. This
                  collaborative endeavor, executed in tandem with a highly
                  skilled team member, aimed to revolutionize the
                  agro-processing sector by introducing a comprehensive web
                  application solution.
                </p>
              </li>
              <li>
                <p>
                  <TbPointFilled />
                  <strong>Agile Scrum Methodology:</strong> Employed Agile Scrum
                  principles to facilitate iterative development and efficient
                  project management.
                </p>
              </li>
              <li>
                <p>
                  <TbPointFilled />
                  <strong>User Authentication:</strong> Implemented secure login
                  and user profile functionalities, ensuring robust
                  authentication for farmers, stakeholders, and partners.
                </p>
              </li>
              <li>
                <p>
                  <TbPointFilled />
                  <strong>Dashboard:</strong> Designed an intuitive dashboard
                  providing farmers with a comprehensive overview of farm
                  activities, product availability, and order status.
                </p>
              </li>
              <li>
                <p>
                  <TbPointFilled />
                  <strong>Stakeholder Liaison:</strong>Integrated a messaging
                  and chat functionality, fostering seamless communication
                  between farmers and stakeholders, such as suppliers and
                  distributors.
                </p>
              </li>
              <li>
                <p>
                  <TbPointFilled />
                  <strong>Product Availability Calendar:</strong> Developed a
                  calendar feature enabling farmers to track the availability of
                  products for ordering.
                </p>
              </li>
              <li>
                <p>
                  <TbPointFilled />
                  <strong>Order Management:</strong> Engineered an interface for
                  partners to place orders directly through the web application,
                  streamlining the order management process.
                </p>
              </li>
              <li>
                <p>
                  <TbPointFilled />
                  <strong>Product Catalogue:</strong> Created a detailed product
                  catalogue with comprehensive listings, including descriptions
                  and pricing.
                </p>
              </li>
              <li>
                <p>
                  <TbPointFilled />
                  <strong>Notifications:</strong> Implemented push notifications
                  to keep farmers and partners informed about product
                  availability, order status, and crucial updates.
                </p>
              </li>
              <li>
                <p>
                  <TbPointFilled />
                  <strong>Collaboration Space:</strong> Established a shared
                  collaboration space to enhance communication and cooperation
                  among farmers, stakeholders, and partners.
                </p>
              </li>
              <li>
                <p>
                  <TbPointFilled />
                  <strong>Agile Scrum Tools:</strong> Integrated Agile Scrum
                  tools into the development process for efficient project
                  management and iterative development.
                </p>
              </li>

              <li>
                <p>
                  <TbPointFilled />
                  <strong>Awareness Campaign Module:</strong> Implemented
                  features to create, manage, and disseminate awareness
                  campaigns regarding product availability and best farming
                  practices.
                </p>
              </li>

              <li>
                <p>
                  <TbPointFilled />
                  <strong>Resource Centre:</strong> Developed an information
                  repository, serving as a centralized resource hub for best
                  practices, guidelines, and industry updates.
                </p>
              </li>

              <li>
                <p>
                  <TbPointFilled />
                  <strong>Feedback and Ratings:</strong> Incorporated a robust
                  feedback and ratings system, allowing partners to provide
                  valuable feedback and rate the quality of products.
                </p>
              </li>
              <li>
                <p>
                  <TbPointFilled />
                  <strong>Analytics Dashboard:</strong> Integrated data
                  analytics tools to derive insights into product demand, user
                  engagement, and order patterns.
                </p>
              </li>

              <li>
                <p>
                  <TbPointFilled />
                  <strong>Security Measures:</strong> Enforced stringent
                  security measures to safeguard user data and ensure privacy.
                </p>
              </li>

              <li>
                <p>
                  <TbPointFilled />
                  <strong>Training and Support:</strong> Incorporated tutorials,
                  guides, and customer support features to assist users
                  unfamiliar with the application, ensuring a seamless user
                  experience.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3>Project Outcome</h3>
            <p>
              By bringing farmers and consumers together on a single platform,
              Agro Farmer&apos;s Hub empowers local agriculture, promotes
              sustainability, and strengthens community resilience. Through this
              project, I aim to contribute to a more equitable and transparent
              food system while supporting the livelihoods of small-scale
              farmers.
            </p>
            <p>
              Feel free to explore the web live and also view its source code on
              GitHub
            </p>
          </div>
        </div>
        <div>
          <a href={live}>
            <IoEarth style={{ color: "blue" }} />
            View Site
          </a>
          <a href={github}>
            <FaGithub style={{ color: "brown" }} />
            View GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;
