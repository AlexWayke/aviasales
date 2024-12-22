import { configureStore } from '@reduxjs/toolkit';
import errorsReducer from './slices/errorSlice';
import filtersReducer from './slices/filtersSlice';
import searchIdReducer from './slices/searchIdSlice';
import sortReducer from './slices/sortSlice';
import ticketsReducer from './slices/ticketsSlice';

const store = configureStore({
  reducer: {
    sort: sortReducer,
    filters: filtersReducer,
    tickets: ticketsReducer,
    searchId: searchIdReducer,
    error: errorsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
