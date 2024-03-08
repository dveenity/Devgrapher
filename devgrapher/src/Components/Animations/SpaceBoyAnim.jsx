import Lottie from "lottie-web";
import SpaceBoy from "../../LottieFiles/SpaceBoy.json";
import { useEffect, useRef } from "react";

const SpaceBoyAnim = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current = Lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: SpaceBoy,
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

export default SpaceBoyAnim;
