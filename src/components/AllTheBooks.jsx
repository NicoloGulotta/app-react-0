import React, { useState, useEffect } from "react";
import { Col, Row, Spinner } from "react-bootstrap"; // Importa Spinner
import scifi from "../data/scifi.json";
import SingleBook from "./SingleBook";

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
        <Row className="g-2">
          {bookList.map((book, index) => (
            <Col xs={6} md={2} key={index}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default AllTheBooks;
