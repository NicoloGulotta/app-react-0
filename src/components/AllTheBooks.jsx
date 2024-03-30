import { Col, Row } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'
import { useState } from 'react'

const AllTheBooks = ({ searchQuery }) => {
  const [selected, setSelected] = useState(false)

  return (
    <Row className='gap-3'>
      <Col md={8}>
        <Row className="g-5 mt-3">
          {fantasy
            .filter((b) => b.title.toLowerCase().includes(searchQuery))
            .map((book) => {
              return (
                <Col xs={12} md={3} key={book.asin}>
                  <SingleBook
                    book={book}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </Col>
              )
            })}
        </Row>
      </Col>
      <Col md={4} className='end-0 position-fixed' style={{ top: "30%" }}>
        <CommentArea asin={selected} />
      </Col>
    </Row >
  )
}

export default AllTheBooks
