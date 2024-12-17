import { setError } from '../redux/slices/errorSlice';

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
    setError('Could not fetch');
    throw new Error('Could not fetch');
  }
  const parsedResult: object = await result.json();
  return { result: parsedResult, status: result.status };
};

const getSearchId = async () => {
  const search: { result?: { searchId?: string }; status: number } =
    await getData('https://aviasales-test-api.kata.academy/search');

  if (search.status === 500) {
    void getSearchId();
  }

  return search.result && search.result.searchId ? search.result.searchId : '';
};

type TicketsRes = {
  result: {
    tickets?: Ticket[];
  };
  status: number;
};

const getTickets = async () => {
  const searchId = await getSearchId();
  const ticketsRes: TicketsRes = await getData(
    `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
  );

  return ticketsRes.result.tickets;
};

export { getTickets };
export type { Ticket };
