import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTickets, Ticket } from '@Components/api/getData';
import { setError, removeError } from './errorSlice';

export interface TicketsState {
  tickets: Ticket[];
  status: string;
}

const initialState: TicketsState = {
  tickets: [],
  status: 'calm',
};

export const fetchTickets = createAsyncThunk<Ticket[]>(
  'tickets/fetchTickets',
  async function () {
    const tickets = await getTickets();
    if (!tickets) {
      throw new Error("Can't fetch tickets");
    }
    return tickets;
  }
);

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state: TicketsState) => {
        state.status = 'loading';
        removeError();
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = 'calm';
        state.tickets = action.payload;
      })
      .addCase(fetchTickets.rejected, () => {
        setError('Could not fetch tickets.');
      });
  },
});

export default ticketsSlice.reducer;
