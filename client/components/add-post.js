import React from 'react';
import { connect } from 'react-redux';
import { writePostTitle, writePostBody, createPost } from '../reducers';

function AddPost(props) {
    const { newPostTitle, newPostBody, user, handleChangeTitle, handleChangeBody, handleSubmit } = props;
    return (
      <div className="main">
        <form className="form" onSubmit={(event) => handleSubmit(event, user)}>
          <div className="form-group">
            <label htmlFor="name"><h2>Create a new post:</h2></label>
            <input
              value={newPostTitle}
              onChange={handleChangeTitle}
              className="form-control"
              type="text"
              name="title"
              required
            />
            <textarea
            value={newPostBody}
            onChange={handleChangeBody}
            className="form-control"
            type="text"
            name="body"
            rows="4"
            cols="50"
            placeholder="Enter your post's text here."
            />
          </div>
          <div className="form-group">
            <button type="submit" className="button-main">Create Post</button>
          </div>
        </form>
    </div>
    )
}

const mapStateToProps = function (state) {
    return {
        newPostTitle: state.newPostTitle,
        newPostBody: state.newPostBody,
        user: state.defaultUser
    }
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleChangeTitle (event) {
      dispatch(writePostTitle(event.target.value));
    },
    handleChangeBody(event) {
        dispatch(writePostBody(event.target.value))
    },
    handleSubmit (event, user) {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      dispatch(createPost({title, body, user: user.email}, ownProps.history));
      dispatch(writePostTitle(''));
      dispatch(writePostBody(''));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);