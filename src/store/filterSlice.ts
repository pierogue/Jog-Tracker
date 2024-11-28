import { createSlice } from '@reduxjs/toolkit';

interface FilterState {
  isFilterActive: boolean;
}

const initialState: FilterState = {
  isFilterActive: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleFilter(state) {
      state.isFilterActive = !state.isFilterActive;
    },
  },
});

export const { toggleFilter } = filterSlice.actions;
export default filterSlice.reducer;
