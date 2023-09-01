import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

const CreateBook = () => {
  const dispatch = useDispatch();
  const initialState = {
    title: '',
    author: '',
    category: '',
  };
  const [bookData, setBookData] = useState(initialState);

  const inputChangehandler = (e) => {
    const { name, value } = e.target;
    setBookData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleAddBook = (e) => {
    e.preventDefault();

    const { title, author, category } = bookData;

    if (title && author && category) {
      const timestamp = Date.now(); // Using timestamp as a unique ID
      const newBook = {
        item_id: timestamp.toString(),
        ...bookData,
      };
      dispatch(addBook(newBook));
      setBookData(initialState);
    }
  };
  return (
    <div className="containerCreateBooks">
      <form>
        <h3>ADD NEW BOOK</h3>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={bookData.title}
          onChange={inputChangehandler}
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          value={bookData.author}
          onChange={inputChangehandler}
        />
        <select
          className="select"
          name="category"
          value={bookData.category}
          onChange={inputChangehandler}
        >
          <option value="">Select Category</option>
          <option value="action">Action</option>
          <option value="Science/Fiction">Science/Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button
          className="btn"
          type="button"
          onClick={handleAddBook}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
