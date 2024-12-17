import './button.scss';

type ButtonProps = {
  name: string;
  handler: () => void;
};

function Button(props: ButtonProps) {
  return (
    <button
      onClick={() => {
        props.handler();
      }}
      className="button"
    >
      <p className="button__text">{props.name}</p>
    </button>
  );
}

export default Button;
