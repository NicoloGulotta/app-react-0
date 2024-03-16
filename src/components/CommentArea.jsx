import React, { useState, useEffect } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";

function CommentArea(props) {
  const { cardId } = props;
  const [inputValue, setInputValue] = useState("");
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments") || "[]");
    setComments(savedComments);
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (inputValue.trim() !== "") {
      const newComment = { text: inputValue, rating: rating };
      setComments([...comments, newComment]);
      setInputValue("");
      setRating(0);
    }
  };

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleRemoveComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };


  return (
    <div className="inputComment">
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          value={inputValue}
          style={{ width: "auto"}}
        
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Lascia un commento..."
        />
        <Form.Label>Valuta:</Form.Label>
        <div className="mb-3">
          {[1, 2, 3, 4, 5].map((value) => (
            <Form.Check
              key={value}
              inline
              className="m-1"
              label={value}
              type="radio"
              name="rating"
              value={value}
              checked={rating === value}
              onChange={handleRatingChange}
            />
          ))}
        </div>
      </Form.Group>
      <Button variant="dark" onClick={handleAddComment}>
        Aggiungi
      </Button>
      <ListGroup className="mt-3">
        {comments.map((comment, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between">
            {comment.text} - Valutazione: {comment.rating}
            <div>
              <Button variant="danger" className="py-1" onClick={() => handleRemoveComment(index)}>
                X
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default CommentArea;
