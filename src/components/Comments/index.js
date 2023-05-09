import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentList: [],
  }

  onChangeName = event => {
    // console.log(event.target.value)
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    // console.log(event.target.value)
    this.setState({comment: event.target.value})
  }

  onClickAddComment = event => {
    event.preventDefault()
    const {name, comment, commentList} = this.state

    const newListItem = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newListItem],
      name: '',
      comment: '',
    }))
  }

  onDeleteComment = id => {
    console.log('delete Triggered on id', id)
    const {commentList} = this.state

    this.setState(prevState => ({
      commentList: prevState.commentList.filter(eachItem => eachItem.id !== id),
    }))
  }

  render() {
    const {name, comment, commentList} = this.state

    const count = commentList.length

    console.log(commentList.length)

    return (
      <div className="app-container">
        <h1 className="head"> Comments </h1>
        <div className="form-image-container">
          <div className="form-container">
            <form className="form" onSubmit={this.onClickAddComment}>
              <p>Say something about 4.0 Technologies</p>
              <input
                type="input"
                className="name"
                placeholder="Your Name"
                onChange={this.onChangeName}
                value={name}
              />
              <textarea
                rows="5"
                cols="9"
                className="comment"
                placeholder="Your Comment"
                onChange={this.onChangeComment}
                value={comment}
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <div className="count-container">
          <p className="count"> {count} </p>
          <p className="comments-name"> Comments </p>
        </div>
        <ul className="u-list">
          {commentList.map(eachItem => (
            <CommentItem
              eachComment={eachItem}
              key={eachItem.id}
              onDeleteComment={this.onDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
