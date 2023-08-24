/* eslint-disable react/prop-types */
export default function Book({ book }) {
  return (
    <>
      <h1>{ book.bookname }</h1>
      <p>
        <strong>Auther: </strong>
        { book.auther }
      </p>
      <button type="button">Delete</button>
    </>
  );
}
