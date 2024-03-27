import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getComments = async () => {
      setLoading(true);
      setError(null);
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" + asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWZjNGM3MjYzYTljNjAwMTk0YWU5NzIiLCJpYXQiOjE3MTEwMzM0NTgsImV4cCI6MTcxMjI0MzA1OH0.fuL0ugBP3eHihQ4x3c9IH_DCbgQDOuUBEBAKPyU5fsE",
            },
          }
        );
        if (response.ok) {
          let comments = await response.json();
          setComments(comments);
        } else {
          setError('Si è verificato un errore durante il recupero dei commenti.');
        }
      } catch (error) {
        setLoading(false);
        setError('Si è verificato un errore durante il recupero dei commenti.');
      } 
    };

    if (asin) {
      getComments();
    }
  }, [asin]);

  return (
    <div className="text-center">
      <AddComment asin={asin} />
      {loading ? (
        <p>Caricamento in corso...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <CommentList commentsToShow={comments} />
      )}
    </div>
  );
};

export default CommentArea;
