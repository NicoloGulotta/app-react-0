import { Navbar, Nav, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const MyNav = ({ searchQuery, setSearchQuery }, { isDetailsSection }) => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary mb-3 top-0 w-100 z-3" bg="dark"
      data-bs-theme="dark"
      data-testid="Navbar"
    >
      <Container fluid>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Navbar.Brand>EpiBooks</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="nav-link" >Home</div>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <div className="nav-link" >About</div>
            </Link>
            <Link to="/browse" style={{ textDecoration: 'none' }}>
              <div className="nav-link" >Browse</div>
            </Link>
          </Nav>
          <Nav className="ms-auto">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
