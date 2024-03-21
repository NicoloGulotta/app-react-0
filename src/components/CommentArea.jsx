import React, { useEffect, useState } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async (asin) => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/` + asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWZjMDA5NTYzYTljNjAwMTk0YWU5MTQiLCJpYXQiOjE3MTEwMTQwMzcsImV4cCI6MTcxMjIyMzYzN30.CsIhyLYLHizhq1I4mPI5xYUWfAmoropFwqqjJCejh3o",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setComments(data);
        } else {
          console.error("Error fetching comments:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
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
