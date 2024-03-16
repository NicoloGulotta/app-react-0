import React, { useState } from "react";
import { Form } from "react-bootstrap";

function CommentArea() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>Commento:</Form.Label>
        <Form.Control
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Lascia un commento..."
        />
      </Form.Group>
    </div>
  );
}

export default CommentArea;
