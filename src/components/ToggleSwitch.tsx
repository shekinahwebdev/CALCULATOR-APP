import sun from "/public/assets/icon-sun.svg";
import moon from "/public/assets/icon-moon.svg";

export const ToggleSwitch = () => {
  return (
    <div className="toggle-switch">
      <img src={sun} alt="Toggle Theme" className="toggle-icon" />
      <img src={moon} alt="Toggle Theme" className="toggle-icon" />
    </div>
  );
};
