import { Navbar, Nav, Container } from 'react-bootstrap'

const MyNav = () => (
  <Navbar
    expand="lg"
    cla-bs-theme="dark"
  >
    <ContainssName="bg-body-tertiary mb-3"
    bg="dark"
    dataer fluid>
      <Navbar.Brand href="#">Books</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default MyNav
