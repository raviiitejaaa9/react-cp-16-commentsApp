// Write your code here
import './index.css'

const CommentItem = props => {
  const {eachComment, onDeleteComment} = props
  console.log(eachComment)
  // console.log(props)
  const {id, name, comment, isLiked} = eachComment
  console.log(id)

  const onCLickDelete = () => {
    onDeleteComment(id)
  }

  return (
    <li className="each-comment">
      <div className="profile-container">
        <p className="profile"> {name[0]} </p>
        <div className="name-comment-container">
          <h1 className="name1">
            {name} <span> time </span>
          </h1>
          <p className="comment1"> {comment} </p>
        </div>
      </div>
      <div className="like-delete-sec">
        <div className="like-sec">
          <img
            className="like-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
          />
          <p> Like </p>
        </div>
        <div className="delete-sec">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
            onClick={onCLickDelete}
          />
        </div>
      </div>
    </li>
  )
}

CommentItem.defaultProps = {
  name: 'ravi',
  comment: 'good',
}

export default CommentItem
