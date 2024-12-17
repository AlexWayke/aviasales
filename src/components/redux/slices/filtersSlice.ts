import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export type Filter = {
  id: string;
  name: string;
  count?: number;
  isOn: boolean;
};

type FiltersState = {
  filters: Filter[];
};

const initialState: FiltersState = {
  filters: [
    { isOn: true, name: 'Все', id: uuidv4() },
    { isOn: true, count: 0, name: 'Без пересадок', id: uuidv4() },
    { isOn: true, count: 1, name: '1 пересадка', id: uuidv4() },
    { isOn: true, count: 2, name: '2 пересадки', id: uuidv4() },
    { isOn: true, count: 3, name: '3 пересадки', id: uuidv4() },
  ],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilters(state, action: PayloadAction<string>) {
      const toggledFilter = state.filters.find(
        (filter) => filter.id === action.payload
      );
      if (toggledFilter) toggledFilter.isOn = !toggledFilter.isOn;

      if (action.payload === state.filters[0].id) {
        state.filters.forEach(
          (filter) => (filter.isOn = state.filters[0].isOn)
        );
      }
      const allChecked =
        state.filters.slice(1).filter((filter) => !filter.isOn).length === 0;
      state.filters[0].isOn = allChecked;
    },
  },
});

export const { changeFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
