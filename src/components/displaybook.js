import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookItems, removeBook } from '../redux/books/booksSlice';

const Book = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch]);

  const renderBook = (itemId, book) => {
    const { category, title, author } = book;
    return (
      <div key={itemId} className="containerRender" style={{ display: 'flex' }}>
        <div className="renderLeft">
          <p>{category}</p>
          <h3>{title}</h3>
          <p>{author}</p>
          <div className="leftButton">
            <button className="leftButton" type="button">
              Comment
            </button>
            <button
              className="leftButton"
              type="button"
              onClick={() => dispatch(removeBook(itemId))}
            >
              Remove
            </button>
            <button className="leftButton" type="button">
              Edit
            </button>
          </div>
        </div>
        <div className="renderRight">
          <div className="middle">
            <p className="Amid">Progress</p>
            <div className="midRight">
              <h4>60%</h4>
              <h4>Completed</h4>
            </div>
          </div>
          <div className="deepRight">
            <p>Current Chapter</p>
            <p>Chapter 15</p>
            <button className="blue" type="button">
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Request failed</p>;
  }

  if (!books) {
    return null;
  }

  return (
    <div>
      {Object.entries(books).map(([itemId, book]) => renderBook(itemId, book[0]))}
    </div>
  );
};

export default Book;
