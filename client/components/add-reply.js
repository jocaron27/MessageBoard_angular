import React from 'react';
import { connect } from 'react-redux';
import { createReply } from '../store';

function AddReply(props) {
    const { handleSubmit } = props;
    return (
      <div className="main">
        <h2>Create a new post:</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="body">Reply Message</label>
            <textarea
            className="form-control"
            type="text"
            name="text"
            rows="4"
            cols="50"
            placeholder="Enter your post's text here."
            />
            <label htmlFor="user">Reply User</label>
            <input
              className="form-control"
              type="text"
              name="user"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="button-main">Post Reply</button>
          </div>
        </form>
    </div>
    )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = function (dispatch, ownProps) {
  let postId = ownProps.postId;
  return {
    handleSubmit (event) {
      event.preventDefault();
      const user = event.target.user.value;
      const text = event.target.text.value;
      dispatch(createReply({user, text, postId}));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReply);
