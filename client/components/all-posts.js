import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
const moment = require('moment');

function AllPosts(props) {
    const { posts } = props;
    return (
      <div className="main">
        {posts.length ? posts.map(post => {
            let date = moment(post.date).format('MMMM Do YYYY, h:mm:ss a');            
            return (
                <div key={post.id}>
                    <div>{post.title.length > 30 ? post.title.slice(0, 30).concat('...') : post.title}</div>
                    <div>Posted By: {post.user}</div>
                    <div><Link to={`/posts/${post.id}/#comments`}>{post.comments} Comments</Link></div>
                    <div>Last Update: {date}</div>
                </div>
            )
        }) : <p>There are currently no posts. Click <Link to="/posts/new">here</Link> to add one!</p>}
        <Link to="/posts/new"><button>Create New Post</button></Link>
    </div>
    )
}

const mapStateToProps = function (state) {
    return {
        posts: state.allPosts,
    }
};

export default connect(mapStateToProps)(AllPosts);
