// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {eachComment, onDeleteComment, backgroundClassNames, onLike} = props
  console.log(backgroundClassNames)
  console.log(eachComment)
  // console.log(props)
  const {id, name, comment, isLiked} = eachComment
  const reqTime = formatDistanceToNow(new Date())
  console.log(isLiked)
  // console.log(reqTime)

  const likedImage =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const notLikedImage =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeEl = isLiked ? likedImage : notLikedImage

  const randomNumber = Math.ceil(Math.random() * 7)

  const reqColor = backgroundClassNames[randomNumber]
  // console.log(reqColor)

  // console.log(randomNumber)

  const onClickLike = () => {
    onLike(id)
  }

  const onCLickDelete = () => {
    onDeleteComment(id)
  }

  return (
    <li className="each-comment">
      <div className="profile-container">
        <p className={`profile ${reqColor}`}> {name[0]} </p>
        <div className="name-comment-container">
          <div className="name-time-container">
            <h1 className="name1">{name}</h1>
            <p> {reqTime} </p>
          </div>
          <p className="comment1"> {comment} </p>
        </div>
      </div>
      <div className="like-delete-sec">
        <div className="like-sec">
          <button type="button" className="like-btn" onClick={onClickLike}>
            <img className="like-img" src={likeEl} alt="like" />
          </button>
          <p> Like </p>
        </div>
        <div className="delete-sec">
          <button
            type="button"
            onClick={onCLickDelete}
            className="delete-btn"
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
              alt="delete"
            />
          </button>
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
