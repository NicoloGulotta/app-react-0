import { useState } from 'react'
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'
import './SingleBook.css';
const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false)

  return (
    <>
      <Card
        onClick={() => setSelected(!selected)}
        style={{ border: selected ? '5px solid red' : 'none' }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'white' }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
      {selected && <CommentArea asin={book.asin} />}
    </>
  )
}

export default SingleBook
