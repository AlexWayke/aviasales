import './button.scss';

type ButtonProps = {
  name: string;
};

function Button(props: ButtonProps) {
  return (
    <button className="button">
      <p className="button__text">{props.name}</p>
    </button>
  );
}

export default Button;
