import { Ticket } from '@Components/api/getData';

const sortByPrice = (a: Ticket, b: Ticket) => a.price - b.price;
const sortByTime = (a: Ticket, b: Ticket) => {
  const firstTime = a.segments.reduce((acc, seg) => acc + seg.duration, 0);
  const secondTime = b.segments.reduce((acc, seg) => acc + seg.duration, 0);
  return firstTime - secondTime;
};

const sortByOptimal = (a: Ticket, b: Ticket) => {
  const firstTime =
    a.segments.reduce((acc, seg) => acc + seg.duration, 0) + a.price;
  const secondTime =
    b.segments.reduce((acc, seg) => acc + seg.duration, 0) + b.price;
  return firstTime - secondTime;
};

const sortTickets = (tickets: Ticket[], sortBy: string) => {
  switch (sortBy) {
    case 'price':
      tickets = tickets.sort(sortByPrice);
      return tickets;
    case 'time':
      tickets = tickets.sort(sortByTime);
      return tickets;
    case 'optimal':
      tickets = tickets.sort(sortByOptimal);
      return tickets;
    default:
      return tickets;
  }
};

export default sortTickets;
