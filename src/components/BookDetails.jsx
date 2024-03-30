import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CommentArea from './CommentArea'
import fantasy from '../data/fantasy.json'
import CommentList from './CommentList'

const BookDetails = () => {
  const params = useParams()
  const foundBook = fantasy.find((book) => book.asin === params.asin)

  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <Card className='bg-dark'>
          <Card.Img variant="top" src={foundBook.img} />
          <Card.Body>
            <Card.Title style={{ color: 'white' }}>
              {foundBook.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <CommentArea asin={params.asin} />
        <CommentList asin={params.asin} />
      </Col>
    </Row>
  )
}

export default BookDetails
