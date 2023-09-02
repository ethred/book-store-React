import React, { useEffect } from 'react';
import '../styles/bookdisplay.css';
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
          <p className="cat">{category}</p>
          <h3 className="tit">{title}</h3>
          <p className="auth">{author}</p>
          <div className="leftButton">
            <button className="leftButton" type="button">
              Comment
            </button>
            <div className="Line-2" />
            <button
              className="leftButton"
              type="button"
              onClick={() => dispatch(removeBook(itemId))}
            >
              Remove
            </button>
            <div className="Line-2" />
            <button className="leftButton" type="button">
              Edit
            </button>
          </div>
        </div>
        <div className="renderRight">
          <div className="middle">
            <p className="Amid" />
            <div className="midRight">
              <h4 className="percent">60%</h4>
              <h4 className="completed">Completed</h4>
            </div>
          </div>
          <div className="deepRight">
            <p className="current">Current Chapter</p>
            <p className="chapter">Chapter 15</p>
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
