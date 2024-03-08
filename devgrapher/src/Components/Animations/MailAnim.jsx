import Lottie from "lottie-web";
import mailSend from "../../LottieFiles/mailSend.json";
import { useEffect, useRef } from "react";

const MailAnim = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current = Lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: mailSend,
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

export default MailAnim;
