import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../store';
const moment = require('moment');

function AddPost(props) {
    const { user, handleSubmit } = props;
    return (
      <div className="main">
        <h2>Create a new post:</h2>
        <form className="form" onSubmit={(event) => handleSubmit(event, user)}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              required
            />
            <label htmlFor="body">Message</label>
            <textarea
            className="form-control"
            type="text"
            name="body"
            rows="4"
            cols="50"
            placeholder="Enter your post's text here."
            />
            <label htmlFor="user">User</label>
            <input
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

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleSubmit (event) {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      const user = event.target.user.value;
      const date = moment().format('MMMM Do YYYY, h:mm:ss a');
      dispatch(createPost({title, body, user, date}, ownProps.history));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
