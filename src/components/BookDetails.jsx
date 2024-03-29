import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CommentArea from "./CommentArea";
import fantasy from "../data/fantasy.json";

const BookDetails = () => {
  const params = useParams();
  const foundBook = fantasy.find((book) => book.asin === params.asin);

  return (
    <div className="d-flex flex-column g-2 justyfie-content-center m-4 align-items-center">
      <div >
        <Card style={{ width: "300px" }} className="bg-dark">
          <Card.Img variant="top" src={foundBook.img} />
          <Card.Body>
            <Card.Title style={{ color: "white" }}>{foundBook.title}</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div>
        <CommentArea asin={params.asin} />
      </div>
    </div>
  );
};

export default BookDetails;
