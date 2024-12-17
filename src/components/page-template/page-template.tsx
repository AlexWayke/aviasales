import './page-template.scss';

type FlexProps = {
  children: React.ReactNode;
};

function FlexTemplate(props: FlexProps) {
  const classes: string = 'page-template';

  return <div className={classes}>{props.children}</div>;
}

export default FlexTemplate;
