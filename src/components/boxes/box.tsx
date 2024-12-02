import './box.scss';

type BoxProps = {
  children: React.ReactNode;
};

function Box(props: BoxProps) {
  return <div className={'box'}>{props.children}</div>;
}

export default Box;
