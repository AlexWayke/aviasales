import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ErrorState = {
  error: boolean;
  status: string;
};

const initialState: ErrorState = {
  error: false,
  status: '',
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string>) {
      state.error = true;
      state.status = action.payload;
    },
    removeError(state) {
      state.error = false;
      state.status = '';
    },
  },
});

export const { setError, removeError } = errorSlice.actions;

export default errorSlice.reducer;
