import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import AllTheBooks from './components/AllTheBooks';

function App() {
  const [scifi, setBookList] = useState([]); 

  const handleSearch = (searchTerm) => {
    const filteredBooks = scifi.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBookList(filteredBooks);
  };
  return (
    <>
      <MyNav onSearch={handleSearch} />
      <Container>
        <AllTheBooks scifi={scifi} setBookList={setBookList} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
