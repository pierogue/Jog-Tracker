import { createSlice } from '@reduxjs/toolkit';

interface MenuState {
  isMenuActive: boolean;
}

const initialState: MenuState = {
  isMenuActive: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isMenuActive = !state.isMenuActive;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
