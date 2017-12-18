import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

function AllPosts(props) {
    const { posts } = props;
    console.log(posts)
    return (
      <div className="main">
        {posts.length ? posts.map(post => {
            return (
                <div key={post.id}>
                    <div>{post.title}</div>
                    <div>Posted By: {post.user}</div>
                    <div>{post.excerpt}</div>
                    <div><Link to={`/posts/${post.id}/#comments`}>{post.comments} Comments</Link></div>
                    <div>Last Update: {post.time}</div>
                </div>
            )
        }) : <p>There are currently no posts. Click <Link to="/posts/new">here</Link> to add one!</p>}
        <Link to="/posts/new"><button>Create New Post</button></Link>
    </div>
    )
}

const mapStateToProps = function (state) {
    return {
        posts: state.post.allPosts,
    }
};

export default connect(mapStateToProps)(AllPosts);
