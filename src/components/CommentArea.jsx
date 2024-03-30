import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true);
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
          setIsLoading(false);
        } else {
          setError("Errore nella ricezione dei commenti.");
          setIsLoading(false);
        }
      } catch (error) {
        setError("Si è verificato un errore durante il recupero dei commenti.");
        setIsLoading(false);
      }
    };
    if (asin) {
      getComments();
    }
  }, [asin]);

  return (
    <div className="text-center" data-testid="Comment">

      {isLoading && <Loading />}
      {error && <p>{error}</p>}
      <AddComment asin={asin} />
      Commenti
      <CommentList commentsToShow={comments} />
    </div>
  );
};
export default CommentArea