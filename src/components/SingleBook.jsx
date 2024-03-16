import React, { useState } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

function SingleBook(props) {
  const { book } = props;
  const [isSelected, setIsSelected] = useState(false);
  const [comments, setComments] = useState([]);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };
  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <Card
        style={{ width: "200px", height: "400px" }}
        className={`book-cover bg-dark m-1 d-flex flex-column ${
          isSelected ? "border-4 border-danger" : ""
        }`}
        onClick={handleCardClick}
      >
        <Card.Img className="img-book" variant="top" src={book.img} />
        <Card.Body className="p-1">
          <Card.Title className="title-book text-light fs-6">
            {book.title}
          </Card.Title>
        </Card.Body>
      </Card>
      {isSelected && <CommentArea onAddComment={addComment} />}
    </div>
  );
}

export default SingleBook;
