import Lottie from "lottie-web";
import nightSky from "../../LottieFiles/nightSky.json";
import { useEffect, useRef } from "react";

const Night = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current = Lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: nightSky,
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

export default Night;
