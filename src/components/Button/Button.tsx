interface ButtonProps {
  text: string;
  actionOnClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ actionOnClick, text }: ButtonProps): JSX.Element => {
  return <button onClick={actionOnClick}>{text}</button>;
};

export default Button;
