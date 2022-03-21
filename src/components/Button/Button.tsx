import StyledButton from "./StyledButton";

interface ButtonProps {
  text: string;
  actionOnClick: React.MouseEventHandler<HTMLButtonElement>;
  disableCondition: boolean;
}

const Button = ({
  actionOnClick,
  disableCondition,
  text,
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton disabled={disableCondition} onClick={actionOnClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
