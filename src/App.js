import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import AllTheBooks from './components/AllTheBooks'; 
import SearchBar from './components/SearchBar';

function App() {
  return (
    <>
      <MyNav />
      <SearchBar/>
      <Container>
        <AllTheBooks />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
