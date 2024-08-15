import React from 'react';
import BookItem from '../bookItem/BookItem';
import PropTypes from 'prop-types';

const Books = ({ books }) => {
    return (
        <div className="d-flex justify-content-center flex-wrap">
            {books.map((book, index) => (
                <BookItem
                    key={index}
                    title={book.bookTitle}
                    author={book.bookAuthor}
                    rating={book.bookRating}
                    pageCount={book.pageCount}
                    imageUrl={book.imageUrl}
                />
            ))}
        </div>
    );
};

Books.propTypes = {
    bookTitle: PropTypes.string,
    bookAuthor: PropTypes.string,
    bookRating: PropTypes.array,
    pageCount: PropTypes.number,
    imageUrl: PropTypes.string,
};

export default Books;