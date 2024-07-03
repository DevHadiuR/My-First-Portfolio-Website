import { FaArrowRight } from "react-icons/fa";
import "./AnimatedButton.css";

const AnimatedBtn = () => {
  return (
    <div className="button-container">
      <div className="wave-border">
        <div className="text-rotator">
          <span>My Resume ·· My Resume ·· My Resume ··</span>
        </div>
      </div>
      <button className="animated-button">
        <FaArrowRight className="arrow-icon" />
      </button>
    </div>
  );
};

export default AnimatedBtn;
