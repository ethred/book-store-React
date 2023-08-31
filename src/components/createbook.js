import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

export default function CreateBook() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleAddBook = (title, author) => {
    const newBook = {
      itemId: `${books.length + 1}`,
      title,
      author,
      category: 'uncategorized',
    };
    dispatch(addBook(newBook));
  };
  function handleClick(e) {
    e.preventDefault();
    if (!title || !author) return;
    handleAddBook(title.trim(), author.trim());
    setTitle('');
    setAuthor('');
  }

  return (
    <>
      <h1>Create Book </h1>
      <div>
        <input type="text" placeholder="Enter book name" />
        <select name="auther">
          <option value="volvo">Select books By auther</option>
          <option value="saab">Anthony Onyekachukwu Okonta</option>
          <option value="mercedes">Mayur Patil</option>
          <option value="audi">Adam Boduch </option>
        </select>
        <button type="submit" onClick={handleClick}>Add Book</button>
      </div>
    </>
  );
}
