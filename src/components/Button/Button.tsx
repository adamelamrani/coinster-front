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
    <button disabled={disableCondition} onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
