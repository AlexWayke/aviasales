import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTickets, Ticket } from '@Components/api/getData';

export interface TicketsState {
  tickets: Ticket[];
  status: string;
  stop: boolean;
}

const initialState: TicketsState = {
  tickets: [],
  status: 'calm',
  stop: false,
};

type ticketsResponse = {
  tickets?: Ticket[];
  stop?: boolean;
};

export const fetchTickets = createAsyncThunk<ticketsResponse, string>(
  'tickets/fetchTickets',
  async function (searchId: string) {
    const response = await getTickets(searchId);
    if (!response.tickets) {
      throw new Error("Can't fetch tickets");
    }
    return response;
  }
);

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state: TicketsState) => {
        state.status = 'loading';
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = 'calm';
        state.tickets = action.payload.tickets
          ? state.tickets.concat(action.payload.tickets)
          : state.tickets;
        state.stop = action.payload.stop ? action.payload.stop : state.stop;
      })
      .addCase(fetchTickets.rejected, (state: TicketsState) => {
        state.status = 'error';
      });
  },
});

export default ticketsSlice.reducer;
