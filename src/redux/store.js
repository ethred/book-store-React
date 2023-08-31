import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    category: categoriesReducer,
  },
});
