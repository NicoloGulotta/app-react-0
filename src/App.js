import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import AllTheBooks from './components/AllTheBooks';
import CommentArea from './components/CommentArea';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <MyNav setSearchQuery={setSearchQuery} />
      <Container>
        <Row className="g-2 mt-1">
          <Col xs={6} md={6} xl={8} >
            <AllTheBooks searchQuery={searchQuery} />
          </Col>
          <Col xs={6} md={4} xl={4} className="d-flex justify-content-center align-items-end h-100"  style={{ position: 'sticky', top: '40%' }} >
            <div>
              <CommentArea />
            </div>
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
