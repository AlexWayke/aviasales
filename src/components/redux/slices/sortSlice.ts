import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SortState {
  sortBy: string;
}

const initialState: SortState = {
  sortBy: '',
};

const sortSlice = createSlice({
  name: 'sortBy',
  initialState,
  reducers: {
    changeSort(state, action: PayloadAction<string>) {
      if (state.sortBy === action.payload) {
        state.sortBy = '';
      } else {
        state.sortBy = action.payload;
      }
    },
  },
});

export const { changeSort } = sortSlice.actions;

export default sortSlice.reducer;
