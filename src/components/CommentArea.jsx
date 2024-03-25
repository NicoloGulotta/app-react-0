import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
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
        console.log(response);
        if (response.ok) {
          let comments = await response.json();
          setComments(comments);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (asin) {
      getComments();
    }
  }, [asin]);

  return (
    <div className="text-center">
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
