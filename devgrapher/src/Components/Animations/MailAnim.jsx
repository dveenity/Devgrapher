import Lottie from "lottie-react";
import mailSend from "../../LottieFiles/mailSend.json";

const MailAnim = () => {
  return <Lottie className="mailAnim" animationData={mailSend} loop={true} />;
};

export default MailAnim;
