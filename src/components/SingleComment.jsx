import { Button, ListGroup } from 'react-bootstrap';

const SingleComment = ({ comment }) => {
  const deleteComment = async (commentId) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + commentId,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWZjMDA5NTYzYTljNjAwMTk0YWU5MTQiLCJpYXQiOjE3MTEwMTQwMzcsImV4cCI6MTcxMjIyMzYzN30.CsIhyLYLHizhq1I4mPI5xYUWfAmoropFwqqjJCejh3o',
          },
        }
      );
      if (response.ok) {
        alert('La recensione è stata eliminata!');
      } else {
        throw new Error('La recensione non è stata eliminata!');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
