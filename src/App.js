import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Title from './components/Title'
import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <>
      <MyNav />
      <Title />
      <Container>
        <AllTheBooks />
      </Container>
      <MyFooter />
    </>
  )
}

export default App
