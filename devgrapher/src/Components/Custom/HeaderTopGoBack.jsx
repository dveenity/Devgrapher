import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";

const HeaderTopGoBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This function will go back to the previous page
  };

  return (
    <button onClick={goBack} className="custom-component">
      <HiArrowNarrowLeft />
      <p>go back...</p>
    </button>
  );
};

export default HeaderTopGoBack;
