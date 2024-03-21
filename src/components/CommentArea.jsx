import React, { useEffect, useState } from "react";
import AddComment  from "./AddComment";
import CommentList  from "./CommentList";
const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async (asin) => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzY2RmYjI0ZjYwNTAwMTkzN2Q1MTYiLCJpYXQiOjE3MTA4Nzc5NzIsImV4cCI6MTcxMjA4NzU3Mn0.BiLYHCZJFB8rBCAzRrTUgk2mPwrrzXc5ZQ6BURct-hA",
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
