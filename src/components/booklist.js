import CreateBook from './createbook';
import Book from './displaybook';

export default function BookList() {
  const bookList = [
    {
      Id: 1,
      bookname: 'React.js Design Patterns',
      auther: ' Anthony Onyekachukwu Okonta ',
    },
    {
      Id: 2,
      bookname: 'React.js For Beginners',
      auther: 'Mayur Patil',
    },
    {
      Id: 3,
      bookname: 'React and React Native',
      auther: ' Adam Boduch ',
    },
  ];
  return (
    <>
      {
        bookList.map((book) => (
          <div key={book.Id}>
            <Book book={book} />
          </div>
        ))
      }
      <hr />
      <CreateBook />
    </>
  );
}
