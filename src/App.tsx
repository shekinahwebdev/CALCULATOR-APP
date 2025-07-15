import { useState } from "react";
import "./App.css";
import { ButtonContainer } from "./components/ButtonContainer";
import { ToggleSwitch } from "./components/ToggleSwitch";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleButtonClick = (value: string) => {
    if (value === "AC") {
      setExpression("");
      setResult("");
    } else if (value === "=") {
      try {
        const evalResult = eval(
          expression.replace(/x/g, "*").replace(/÷/g, "/")
        );
        setResult(evalResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else {
      if (result) {
        setExpression(value);
        setResult("");
      } else setExpression((prev) => prev + value);
    }
  };
  return (
    <main className={`calculator-app ${isDarkMode ? "dark" : "light"}`}>
      <ToggleSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="calculator-display">
        <div className="display-contents">
          <input
            type="text"
            className="expression-input"
            value={expression}
            readOnly
          />
          <div className="result">{result}</div>
        </div>
      </div>
      <ButtonContainer onButtonClick={handleButtonClick} />
    </main>
  );
}

export default App;
