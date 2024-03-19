import React, { useState } from "react";
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';

function MyNav(props) {
  const { onSearch } = props;
  const [inputName, setInputName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Impedisce il comportamento predefinito del modulo
    onSearch(inputName); // Chiama la funzione onSearch passando il valore di inputName
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">iBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
          </Nav>
          <Form onSubmit={handleSubmit} className="ms-auto">
            <Form.Control
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              type="text"
              placeholder="Inserisci titolo..."
              className="me-2"
            />
            <Button variant="outline-light" type="submit">
              Cerca
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
