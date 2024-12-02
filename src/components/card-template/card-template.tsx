import Card from '../card/card';
import Flex from '../flex/flex';
import './card-template.scss';

function CardTemplate() {
  return (
    <Flex classes="flex-col">
      <Card />
      <Card />
      <Card />
    </Flex>
  );
}

export default CardTemplate;
