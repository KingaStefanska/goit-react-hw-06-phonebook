import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './actions';

const filtersInitialState = '';

export const filterReducer = createReducer(filtersInitialState, {
  [setFilter]: (state, action) => (state = action.payload),
});
