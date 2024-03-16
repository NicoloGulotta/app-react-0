import React, { useState, useEffect } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";

function CommentArea(props) {
  const { cardId } = props;
  const [inputValue, setInputValue] = useState("");
  const [rating, setRating] = useState(0); // Stato per salvare la valutazione
  const [comments, setComments] = useState({});

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments") || "{}");
    setComments(savedComments);
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (inputValue.trim() !== "") {
      const updatedComments = { ...comments };
      updatedComments[cardId] = updatedComments[cardId] || [];
      updatedComments[cardId].push({ text: inputValue, rating: rating }); // Salva il commento e la valutazione
      setComments(updatedComments);
      setInputValue("");
      setRating(0); // Resettiamo la valutazione dopo aver aggiunto il commento
    }
  };

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value)); // Imposta il valore della valutazione quando cambia
  };

  const handleRemoveComment = (index) => {
    const updatedComments = { ...comments };
    updatedComments[cardId].splice(index, 1);
    setComments(updatedComments);
  };

  return (
    <div className="inputComment">
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Lascia un commento..."
        />
        <Form.Label>Valuta:</Form.Label>
        <div className="mb-3">
          {[1, 2, 3, 4, 5].map((value) => (
            <Form.Check
              key={value}
              inline
              label={value}
              type="radio"
              name="rating"
              value={value}
              checked={rating === value} // Controlla se il pulsante radio è selezionato
              onChange={handleRatingChange}
            />
          ))}
        </div>
      </Form.Group>
      <Button variant="dark" onClick={handleAddComment}>
        Aggiungi
      </Button>
      <ListGroup className="mt-3">
        {comments[cardId] && comments[cardId].map((comment, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between">
            {comment.text} - Valutazione: {comment.rating}
            <Button variant="danger" onClick={() => handleRemoveComment(index)}>
              Elimina
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default CommentArea;
