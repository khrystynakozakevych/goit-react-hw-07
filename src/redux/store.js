import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Тепер без персистенції
    filters: filtersReducer,
  },
});

export { store };
