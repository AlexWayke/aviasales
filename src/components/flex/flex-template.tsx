import './flex-template.scss';

type FlexProps = {
  children: React.ReactNode;
  direction: string;
};

function FlexTemplate(props: FlexProps) {
  const classes: string = `flex-template flex-${props.direction}`;

  return <div className={classes}>{props.children}</div>;
}

export default FlexTemplate;
