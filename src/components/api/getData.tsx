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

  if (result.status === 500) {
    return getData(url);
  }

  if (!result.ok) {
    throw new Error('Could not fetch');
  }
  const parsedResult: object = await result.json();
  return { result: parsedResult, status: result.status };
};

const getSearchId = async () => {
  const search: { result?: { searchId?: string }; status: number } =
    await getData('https://aviasales-test-api.kata.academy/search');

  return search.result && search.result.searchId ? search.result.searchId : '';
};

type TicketsRes = {
  result: {
    tickets?: Ticket[];
    stop?: boolean;
  };
  status: number;
};

const getTickets = async (searchId: string) => {
  const ticketsRes: TicketsRes = await getData(
    `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
  );

  return ticketsRes.result;
};

export { getSearchId, getTickets };
export type { Ticket };
