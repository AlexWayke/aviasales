import './flex-template.scss';

type FlexProps = {
  children: React.ReactNode;
  classes: string;
};

function FlexTemplate(props: FlexProps) {
  const classes: string = `flex-template ${props.classes}`;

  return <div className={classes}>{props.children}</div>;
}

export default FlexTemplate;
