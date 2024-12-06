import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getTickets, Ticket } from '../api/getData';

import Card from '../card/card';
import Flex from '../flex/flex';
import './card-template.scss';

function CardTemplate() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const cardEls = tickets.map((card) => <Card info={card} key={uuidv4()} />);

  useEffect(() => {
    void (async () => {
      try {
        const ticketsRes = await getTickets();
        if (ticketsRes) {
          setTickets(ticketsRes.slice(0, 5));
        }
      } catch {
        throw new Error("Can't fetch tickets");
      }
    })();
  }, []);

  return <Flex classes="flex-col">{cardEls}</Flex>;
}

export default CardTemplate;
