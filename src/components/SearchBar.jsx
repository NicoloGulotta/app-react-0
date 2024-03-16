import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function SearchBar(props) {
  const { onSearch } = props;
  const [inputName, setInputName] = useState("");

  return (
    <Form onSubmit={(e) => onSearch(e, inputName)} className="m-4">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          type="text"
          placeholder="Inserisci titolo..."
        />
      </Form.Group>

      <Button variant="dark" type="submit">
        Cerca
      </Button>
    </Form>
  );
}
