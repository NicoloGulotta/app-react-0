// AllTheBooks.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import fantasy from '../data/fantasy.json';
import SingleBook from './SingleBook';

const AllTheBooks = ({ searchQuery }) => {
  return (
    <Row className="g-2 mt-3">
      {fantasy
        .filter((b) => b.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .map((book) => {
          return (
            <Col xs={6} md={4} xl={2} key={book.asin}>
              <SingleBook book={book} />
            </Col>
          );
        })}
    </Row>
  );
}

export default AllTheBooks;
