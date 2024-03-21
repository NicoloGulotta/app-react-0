import React, { useState, useEffect } from "react";
import { Col, Row, Spinner } from "react-bootstrap"; 
import scifi from "../data/scifi.json";
import SingleBook from "./SingleBook";
import './AllTheBooks.css';
const AllTheBooks = () => {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBookList(scifi);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden bg-dark ">Loading...</span>
        </Spinner>
      ) : (
        <Row className="g-1">
          {bookList.map((book, index) => (
            <Col xs={6} md={4} key={index}>
              <SingleBook book={book} id={book.asin}/>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default AllTheBooks;
