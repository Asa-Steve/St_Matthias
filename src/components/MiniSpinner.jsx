import { PuffLoader } from "react-spinners";

const MiniSpinner = ({
  size = 30,
  speed = 1,
  color = "var(--color-primary)",
}) => {
  return (
    <PuffLoader
      color={color}
      size={size}
      aria-label="Loading Spinner"
      speedMultiplier={speed}
    />
  );
};

export default MiniSpinner;
