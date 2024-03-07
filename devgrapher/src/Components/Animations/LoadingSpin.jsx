import ClipLoader from "react-spinners/ClipLoader";

function LoadingSpin() {
  return (
    <ClipLoader
      color="var(--black)"
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default LoadingSpin;
