import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WP6izOc4s2Nx0eG8GWkJ/books';

export const getBookItems = createAsyncThunk('books/getBookItems', async (_, thunkAPI) => {
  try {
    const response = await axios.get(apiURL);
    return response.data; // Return the fetched data as the payload
  } catch (error) {
    // throw error; // Rethrow the error to be caught by the rejected case
    return thunkAPI.rejectWithValue('Request failed');
  }
});

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book, thunkAPI) => {
    try {
      const response = await axios.post(apiURL, book);
      if (response.status === 201) {
        thunkAPI.dispatch(getBookItems());
      }
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue('Request failed');
    }
  },
);

export const removeBook = createAsyncThunk('books/deleteBook',
  async (itemId, thunkAPI) => {
    try {
      const response = await axios.delete(`${apiURL}/${itemId}`);

      if (response.status === 201) {
        thunkAPI.dispatch(getBookItems());
      }
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue('Book not deleted');
    }
  });

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    isLoading: true,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookItems.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBookItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBookItems.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBook.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeBook.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default booksSlice.reducer;
