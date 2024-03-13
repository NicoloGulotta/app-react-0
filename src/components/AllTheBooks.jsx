import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import scifi from "../data/scifi.json";
import "./AllTheBooks.css";

const AllTheBooks = () => {
  const [inputName, setInputName] = useState("");
  const [bookList, setBookList] = useState([]);

  async function getBook(name) {
    try {
      const response = await fetch("./scfi.json");
      if (response.ok) {
        const result = await response.json();
        setBookList((prev) => [...prev, result]);
        console.log(result);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function removeBook(name) {
    const filteredList = bookList.filter((el) => el.name !== name);
    setBookList(filteredList);
  }

  return (
    <>
      <div className="input-with-button-container">
        <input
          className="text-input"
          type="text"
          placeholder="Search.."
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button className="add-button" onClick={() => getBook(inputName)}>
          Cerca{" "}
        </button>
      </div>
      <Row className="g-2">
        {scifi.map((book) => {
          return (
            <Col xs={6} md={4} key={book.asin}>
              <Card className="book-cover  d-flex flex-column">
                <Card.Img className="img-book" variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title className="title-book">{book.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default AllTheBooks;
