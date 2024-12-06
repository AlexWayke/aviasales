import { v4 as uuidv4 } from 'uuid';
import { Ticket } from '../api/getData';
import Box from '../boxes/box';
import Flex from '../flex/flex';
import './card.scss';

function Card(props: { key: string; info: Ticket }) {
  const { carrier, price, segments } = props.info;
  const segmentsEls = segments.map((segment) => (
    <Flex key={uuidv4()} classes="card__body-row">
      <div className="card__body-col">
        <p className="card__body-text card__body-text--gray">
          {segment.origin} – {segment.destination}
        </p>
        <p className="card__body-text">10:45 – 08:00</p>
      </div>
      <div className="card__body-col">
        <p className="card__body-text card__body-text--gray">В пути</p>
        <p className="card__body-text">21ч 15м</p>
      </div>
      <div className="card__body-col">
        <p className="card__body-text card__body-text--gray">2 пересадки</p>
        <p className="card__body-text">HKG, JNB</p>
      </div>
    </Flex>
  ));

  return (
    <Box>
      <Flex classes="card__wrapper">
        <Flex classes="card__top">
          <p className="card__price">{price} Р</p>
          <span>
            <img src={`http://pics.avs.io/110/36/${carrier}.png.`} alt="logo" />
          </span>
        </Flex>
        <Flex classes="card__body">{segmentsEls}</Flex>
      </Flex>
    </Box>
  );
}

export default Card;
