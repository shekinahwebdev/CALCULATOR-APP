import { Buttons } from "./Buttons";

interface ButtonContainerProps {
  onButtonClick: (value: string) => void;
}

export const ButtonContainer: React.FC<ButtonContainerProps> = ({
  onButtonClick,
}) => {
  return (
    <main className="button-container">
      <Buttons onButtonClick={onButtonClick} />
    </main>
  );
};
