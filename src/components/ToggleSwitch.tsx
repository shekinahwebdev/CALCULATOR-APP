import sun from "/public/assets/icon-sun.svg";
import moon from "/public/assets/icon-moon.svg";

interface ToggleSwitchProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isDarkMode,
  setIsDarkMode,
}) => {
  return (
    <div className="toggle-switch">
      <button
        className={`btn sun ${!isDarkMode ? "active" : ""}`}
        onClick={() => setIsDarkMode(false)}
      >
        <img src={sun} alt="Toggle Theme" className="toggle-icon" />{" "}
      </button>
      <button
        className={`btn moon ${isDarkMode ? "active" : ""}`}
        onClick={() => setIsDarkMode(true)}
      >
        <img src={moon} alt="Toggle Theme" className="toggle-icon" />
      </button>
    </div>
  );
};
