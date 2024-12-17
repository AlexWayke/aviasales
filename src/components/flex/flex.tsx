import './flex.scss';

type FlexProps = {
  children: React.ReactNode;
  classes: string;
};

function Flex(props: FlexProps) {
  const classes: string = `flex-container ${props.classes}`;

  return <div className={classes}>{props.children}</div>;
}

export default Flex;
