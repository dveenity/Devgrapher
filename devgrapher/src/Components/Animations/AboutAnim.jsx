import Lottie from "lottie-web";
import aboutMe from "../../LottieFiles/coder.json";
import { useEffect, useRef } from "react";

const AboutAnim = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current = Lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: aboutMe,
    });

    // Clean up the animation when the component unmounts
    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
      }
    };
  }, []);

  return <div className="container" ref={containerRef}></div>;
};

export default AboutAnim;
