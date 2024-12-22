import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSearchId } from '@Components/api/getData';
import { setError, removeError } from './errorSlice';

export interface TicketsState {
  searchId: string;
}

const initialState: TicketsState = {
  searchId: '',
};

export const fetchSearchId = createAsyncThunk<string>(
  'searchId/fetchSearchId',
  async function () {
    const response = await getSearchId();
    if (!response) {
      throw new Error("Can't fetch tickets");
    }
    return response;
  }
);

const searchIdSlice = createSlice({
  name: 'searchId',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.pending, () => {
        removeError();
      })
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.searchId = action.payload;
      })
      .addCase(fetchSearchId.rejected, () => {
        setError('Could not fetch tickets.');
      });
  },
});

export default searchIdSlice.reducer;
