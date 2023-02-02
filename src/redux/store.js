import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactReducer';
import { filterReducer } from './filterReducer';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
