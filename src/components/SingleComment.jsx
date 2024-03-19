import { Button, ListGroup } from 'react-bootstrap';

const SingleComment = ({ comment }) => {
  const deleteComment = async (commentId) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + commentId,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzY2RmYjI0ZjYwNTAwMTkzN2Q1MTYiLCJpYXQiOjE3MTA4Nzc5NzIsImV4cCI6MTcxMjA4NzU3Mn0.BiLYHCZJFB8rBCAzRrTUgk2mPwrrzXc5ZQ6BURct-hA',
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
