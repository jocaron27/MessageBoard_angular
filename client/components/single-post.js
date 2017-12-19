import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PostReplies from './post-replies';
import AddReply from './add-reply';
const moment = require('moment');

function SinglePost(props) {
    const { postId, posts } = props;
    let currentPost = posts.find(post => post.id === postId)
    return (
    <div className="main">
    {currentPost ? (
        <div>
            <div className="single-post-container">
                <div className="single-post-header">
                    <div className="single-post-title">{currentPost.title}</div>
                    <div className="single-post-info">
                        <div className="single-post-user">By: {currentPost.user}</div>
                        <div className="single-post-date">On: {moment(currentPost.date).format('MMMM Do YYYY, h:mm:ss a')}</div>
                    </div>
                </div>
                <div className="single-post-button">
                    <Link to="/"><button>Back to Posts</button></Link>
                </div>
            </div>
            <div className="single-post-message">{currentPost.body}</div>
            <hr />
            <div className="replies-title">Responses:</div>
            <PostReplies postId={postId} />
            <hr />
            <AddReply postId={postId} />
            <div className="single-post-button-mobile">
                <hr />
                <Link to="/"><button>Back to Posts</button></Link>
            </div>
        </div>
        ) : <span />
    }
    </div>)
}

const mapStateToProps = function (state, ownProps) {
    const postId = Number(ownProps.match.params.id);
    return {
        posts: state.allPosts,
        postId
    }
};

const mapDispatchToProps = function (dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
