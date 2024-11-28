import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import menuReducer from './menuSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    menu: menuReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
