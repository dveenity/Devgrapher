import Lottie from "lottie-react";
import SpaceBoy from "../../LottieFiles/SpaceBoy.json";

const SpaceBoyAnim = () => {
  return (
    <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
  );
};

export default SpaceBoyAnim;
