import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Initial state:
  books: [
    {
      itemId: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      itemId: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      itemId: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,

  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      state.books = state.books.filter((book) => book.itemId !== itemId);
    },
  },
});

const { addBook, removeBook } = booksSlice.actions;
export {
  addBook,
  removeBook,
};
export default booksSlice.reducer;
