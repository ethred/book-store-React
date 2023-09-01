import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

export default function CreateBook() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('action'); // Initialize with a default category

  const handleAddBook = () => {
    const newBook = {
      itemId: `${books.length + 1}`,
      title: title.trim(),
      author: author.trim(),
      category, // Use the selected category
    };
    dispatch(addBook(newBook));

    // Clear input fields and reset category after adding a book
    setTitle('');
    setAuthor('');
    setCategory('action');
  };
  function handleClick(e) {
    e.preventDefault();
    if (!title || !author) return;
    handleAddBook();
  }

  return (
    <div className="containerCreateBooks">
      <h3>ADD NEW BOOK</h3>
      <form>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select className="select" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="action">Action</option>
          <option value="scienceFiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <button
          className="btn"
          type="submit"
          onClick={handleClick}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
}
