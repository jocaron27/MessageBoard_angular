import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { writePostTitle, writePostBody, writePostUser, createPost } from '../store';

function AddPost(props) {
    const { user, newPostTitle, newPostBody, newPostUser, handleChangeTitle, handleChangeBody, handleChangeUser, handleSubmit } = props;
    return (
      <div className="main">
        <h2>Create a new post:</h2>
        <form className="form" onSubmit={(event) => handleSubmit(event, user)}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              value={newPostTitle}
              onChange={handleChangeTitle}
              className="form-control"
              type="text"
              name="title"
              required
            />
            <label htmlFor="body">Message</label>
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
            <label htmlFor="user">User</label>
            <input
              value={newPostUser}
              onChange={handleChangeUser}
              className="form-control"
              type="text"
              name="user"
              required
            />
          </div>
          <div className="form-group">
            <Link to="/"><button type="cancel" className="button-main">Cancel</button></Link>
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
        newPostUser: state.newPostUser,
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
    handleChangeUser(event) {
      dispatch(writePostUser(event.target.value))
    },
    handleSubmit (event, loggedInUser) {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      const user = event.target.user.value || loggedInUser.email
      dispatch(createPost({title, body, user}, ownProps.history));
      dispatch(writePostTitle(''));
      dispatch(writePostBody(''));
      dispatch(writePostUser(''));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);