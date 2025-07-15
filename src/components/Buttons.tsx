interface ButtonProps {
  onButtonClick: (value: string) => void;
}
export const Buttons: React.FC<ButtonProps> = ({ onButtonClick }) => {
  return (
    <div className="buttons">
      <button
        className="button button-operator-first"
        value="AC"
        onClick={(e) => onButtonClick(e.currentTarget.value)}
      >
        AC
      </button>
      <button
        className="button button-operator-first"
        value="+/-"
        onClick={(e) => onButtonClick(e.currentTarget.value)}
      >
        +/-
      </button>
      <button
        className="button button-operator-first"
        value="%"
        onClick={(e) => onButtonClick(e.currentTarget.value)}
      >
        %
      </button>
      <button
        className="button button-operator-right"
        value="÷"
        onClick={(e) => onButtonClick(e.currentTarget.value)}
      >
        ÷
      </button>

      <button
        className="button"
        value="7"
        onClick={(e) => onButtonClick(e.currentTarget.value)}
      >
        7
      </button>
      <button
        className="button"
        value="8"
        onClick={(e) => onButtonClick(e.currentTarget.value)}
      >
        8
      </button>
      <button
        className="button"
        value="9"
        onClick={(e) => onButtonClick(e.currentTarget.value)}
      >
        9
      </button>
      <button
        className="button button-operator-right"
        value="x"
        onClick={(e) => onButtonClick(e.currentTarget.value)}
      >
        x
      </button>

      <button
        className="button"
        value="4"
        onClick={(e) => onButtonClick(e.currentTarget.value)}
      >
        4
      </button>
      <button
        className="button"
        value="5"
        onClick={(e) => onButtonClick(e.currentTarget.value)}
      >
        5
      </button>
      <button
        className="button"
        value="6"
        onClick={(e) => onButtonClick(e.currentTarget.value)}
      >
        6
      </button>
      <button
        className="button button-operator-right"
        value="-"
        onClick={(e) => onButtonClick(e.currentTarget.value)}
      >
        -
      </button>

      <button
        className="button"
        value="1"
        onClick={(e) => onButtonClick(e.currentTarget.value)}
      >
        1
      </button>
      <button
        className="button"
        value="2"
        onClick={(e) => onButtonClick(e.currentTarget.value)}
      >
        2
      </button>
      <button
        className="button"
        value="3"
        onClick={(e) => onButtonClick(e.currentTarget.value)}
      >
        3
      </button>
      <button
        className="button button-operator-right"
        value="+"
        onClick={(e) => onButtonClick(e.currentTarget.value)}
      >
        +
      </button>

      <button
        className="button button-reset"
        value="C"
        onClick={(e) => onButtonClick(e.currentTarget.value)}
      >
        C
      </button>
      <button
        className="button button-operator"
        value="0"
        onClick={(e) => onButtonClick(e.currentTarget.value)}
      >
        0
      </button>
      <button
        className="button button-operator"
        value="."
        onClick={(e) => onButtonClick(e.currentTarget.value)}
      >
        .
      </button>
      <button
        className="button button-operator-right"
        value="="
        onClick={(e) => onButtonClick(e.currentTarget.value)}
      >
        =
      </button>
      {/*       
      <div className="zero-button-container">
        <div className="zero-button-wrapper">
          <div className="zero-button"></div>
        </div>
        <div className="decimal-button"></div>
      </div>

      <div className="equals-button"></div> */}
    </div>
  );
};
