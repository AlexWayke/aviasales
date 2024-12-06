interface Ticket {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
  ];
}

const getData = async (url: string) => {
  const result = await fetch(url);

  if (!result.ok) {
    throw new Error('Could not fetch');
  }
  const parsedResult: object = await result.json();

  return parsedResult;
};

const getSearchId = async () => {
  const search: { searchId?: string } = await getData(
    'https://aviasales-test-api.kata.academy/search'
  );

  return search.searchId ? search.searchId : '';
};

type TicketsRes = {
  tickets?: Ticket[];
};

const getTickets = async () => {
  const searchId = await getSearchId();
  const ticketsRes: TicketsRes = await getData(
    `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
  );

  return ticketsRes.tickets;
};

export { getTickets };
export type { Ticket };
