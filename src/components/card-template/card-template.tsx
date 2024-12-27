import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Ticket } from '@Components/api/getData';
import Button from '@Components/button/button';
import { setError } from '@Components/redux/slices/errorSlice';
import sortTickets from '@Components/utils/sorting';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Card from '../card/card';
import Flex from '../flex/flex';
import { fetchSearchId } from '../redux/slices/searchIdSlice';
import { fetchTickets } from '../redux/slices/ticketsSlice';
import './card-template.scss';

function CardTemplate() {
  const dispatch = useAppDispatch();
  const searchId = useAppSelector((state) => state.searchId.searchId);
  const { tickets, status, stop } = useAppSelector((state) => state.tickets);
  const filters = useAppSelector((state) => state.filters.filters);
  const sortBy = useAppSelector((state) => state.sort.sortBy);
  const [countOfTickets, setCountOfTickets] = useState(5);

  const filteredTickets = sortTickets(
    tickets.filter((ticket) =>
      ticket.segments.every(
        (segment) =>
          filters.find((filter) => filter.count === segment.stops.length)?.isOn
      )
    ),
    sortBy
  );

  const cardEls = filteredTickets
    .slice(0, countOfTickets)
    .map((card: Ticket) => <Card info={card} key={uuidv4()} />);

  const noTicketsCard = (
    <Flex classes="no-tickets">
      <p>По этому запросу билетов не найдено :(</p>
    </Flex>
  );

  useEffect(() => {
    if (!searchId.length) {
      void dispatch(fetchSearchId());
    }
  });

  useEffect(() => {
    if (status === 'error') {
      dispatch(setError('Fetch error'));
    } else if (searchId.length && !stop) {
      void dispatch(fetchTickets(searchId));
    }
  });

  const ticketsCountHandler = () => {
    setCountOfTickets(countOfTickets + 5);
  };

  return (
    <Flex classes="flex-col">
      {cardEls.length > 0 ? cardEls : noTicketsCard}
      {cardEls.length > 0 && (
        <Button
          name={'ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ'}
          handler={ticketsCountHandler}
        ></Button>
      )}
    </Flex>
  );
}

export default CardTemplate;
