import React from 'react';
import { connect } from 'react-redux';
import { createReply, writeMessage, writeUser } from '../store';

function AddReply(props) {
    const { handleSubmit, newReplyMessage, newReplyUser, handleChangeMessage, handleChangeUser } = props;
    return (
      <div className="main">
        <form className="reply-form" onSubmit={handleSubmit}>
          <div className="reply-form-group-form">
            <label htmlFor="body">Reply Message</label>
            <textarea
            value={newReplyMessage}
            onChange={handleChangeMessage}
            className="form-control"
            type="text"
            name="text"
            rows="4"
            cols="50"
            placeholder="Enter your post's text here."
            />
            <label htmlFor="user">Reply User</label>
            <input
              value={newReplyUser}
              onChange={handleChangeUser}
              className="form-control"
              type="text"
              name="user"
              required
            />
          </div>
          <div className="reply-form-group-button">
            <button type="submit" className="reply-button">Post Reply</button>
          </div>
        </form>
    </div>
    )
}

const mapStateToProps = (state) => {
  return {
    newReplyMessage: state.replies.newMessage,
    newReplyUser: state.replies.newUser
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  let postId = ownProps.postId;
  return {
    handleSubmit (event) {
      event.preventDefault();
      const user = event.target.user.value;
      const text = event.target.text.value;
      dispatch(createReply({user, text, postId}));
      dispatch(writeMessage(''));
      dispatch(writeUser(''));
    },
    handleChangeMessage (event) {
      dispatch(writeMessage(event.target.value))
    },
    handleChangeUser (event) {
      dispatch(writeUser(event.target.value))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReply);
