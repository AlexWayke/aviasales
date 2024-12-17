import './error.scss';

type ErrorProps = {
  status: string;
};

function Error(props: ErrorProps) {
  return (
    <div className="error">
      <p>
        Some conditions went wrong with: &quot;{props.status}&quot;.
        <br />
        Try again later :(
      </p>
    </div>
  );
}

export default Error;
