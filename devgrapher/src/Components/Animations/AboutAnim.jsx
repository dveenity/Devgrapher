import Lottie from "lottie-react";
import aboutMe from "../../LottieFiles/aboutMe.json";

const AboutAnim = () => {
  return <Lottie className="aboutAnim" animationData={aboutMe} loop={true} />;
};

export default AboutAnim;
