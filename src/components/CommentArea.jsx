import { useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'


const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([])


  useEffect(() => {
    const getComments = async () => {
      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' + asin,
          {
            headers: {
              Authorization: 'Bearer inserisci-qui-il-tuo-token',
            },
          }
        )
        console.log(response)
        if (response.ok) {
          let comments = await response.json()
          setComments(comments)
        } else {
          console.log('error')
        }
      } catch (error) {
        console.log(error)
      }
    }
    if (asin) {
      getComments()
    }
  }, [asin])

  return (
    <div className="text-center">
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  )
}

export default CommentArea
