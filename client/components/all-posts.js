import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
const moment = require('moment');

function AllPosts(props) {
    const { posts, replies } = props;
    return (
      <div className="main">
        {posts.length ? posts.map(post => {
            let date = moment(post.date).format('MMMM Do YYYY, h:mm:ss a');
            let comments = replies.filter(reply => reply.postId === post.id).length;
            return (
                <Link key={post.id} to={`/posts/${post.id}`}>
                <div className="post">
                    <div className="post-content">
                        <div className="post-content-title">{post.title.length > 30 ? post.title.slice(0, 30).concat('...') : post.title}</div>
                        <div className="post-content-container">
                            <div className="post-content-info">
                                <div>Posted By: {post.user}</div>
                                <div>{comments} Comments</div>
                            </div>
                            <div className="post-content-date">Last Update: {date}</div>
                        </div>
                    </div>
                    <div className="post-arrow">></div>
                </div>
                </Link>
            )
        }) : <p>There are currently no posts. Click <Link to="/new">here</Link> to add one!</p>}
        <Link to="/new"><button className="post-button">Create New Post</button></Link>
    </div>
    )
}

const mapStateToProps = function (state) {
    return {
        posts: state.allPosts,
        replies: state.replies.allReplies
    }
};

export default connect(mapStateToProps)(AllPosts);
