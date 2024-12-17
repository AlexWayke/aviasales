import { format, addMinutes } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import { Ticket } from '../api/getData';
import Box from '../boxes/box';
import Flex from '../flex/flex';
import './card.scss';

function Card(props: { key: string; info: Ticket }) {
  const { carrier, price, segments } = props.info;

  const getFormattedTime = (duration: number) => {
    const totalTime = duration;
    const hours = String(Math.floor(totalTime / 60));
    const minutes = String(Math.round((totalTime % 60) / 5) * 5);
    return `${hours}ч ${minutes}м`;
  };

  const formattedPrice = `${String(price).slice(0, -3)} ${String(price).slice(-3)}`;

  const segmentsEls = segments.map((segment) => {
    const transferName =
      segment.stops.length > 1
        ? `${String(segment.stops.length)} пересадки`
        : '1 пересадка';

    return (
      <Flex key={uuidv4()} classes="card__body-row">
        <div className="card__body-col">
          <p className="card__body-text card__body-text--gray">
            {segment.origin} – {segment.destination}
          </p>
          <p className="card__body-text">
            {format(new Date(segment.date), 'HH:mm')} –{' '}
            {format(
              new Date(addMinutes(segment.date, segment.duration)),
              'HH:mm'
            )}
          </p>
        </div>
        <div className="card__body-col">
          <p className="card__body-text card__body-text--gray">В пути</p>
          <p className="card__body-text card__body-text--time">
            {getFormattedTime(segment.duration)}
          </p>
        </div>
        <div className="card__body-col">
          <p className="card__body-text card__body-text--gray">
            {segment.stops.length ? transferName : 'Без пересадок'}
          </p>
          <p className="card__body-text">{segment.stops.join(', ')}</p>
        </div>
      </Flex>
    );
  });

  return (
    <Box>
      <Flex classes="card__wrapper">
        <Flex classes="card__top">
          <p className="card__price">{formattedPrice} Р</p>
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
