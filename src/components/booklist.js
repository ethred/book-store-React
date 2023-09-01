import { useSelector } from 'react-redux';
import Book from './displaybook';

export default function BookList() {
  const { books } = useSelector((state) => state.books);
  return (
    <>
      <div>
        {books.map((book) => (
          <Book key={book.itemId} book={book} />
        ))}
      </div>
    </>
  );
}
