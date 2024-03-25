import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import AllTheBooks from './components/AllTheBooks';
import { Container } from 'react-bootstrap';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <MyNav setSearchQuery={setSearchQuery} />
      <Container>
        <AllTheBooks searchQuery={searchQuery} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
