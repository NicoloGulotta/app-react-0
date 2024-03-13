import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import AllTheBooks from './components/AllTheBooks'; 
// import NameForm from './components/NameForm'; 

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <AllTheBooks />
        {/* <NameForm /> */}
      </Container>
      <MyFooter />
    </>
  );
}

export default App;