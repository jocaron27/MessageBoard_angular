import React from 'react';
import { connect } from 'react-redux';
// import PostReplies from './post-replies';
import { fetchPosts } from '../store';


function SinglePost(props) {
    const { postId, posts } = props;
    console.log('posts', posts)
    let currentPost = posts.find(post => post.id === postId)
    console.log('currentPost', currentPost)
    return (
    <div className="post">
    {currentPost ? (
        <div>
            <div>
                <div>{currentPost.title}</div>
                <div>By: {currentPost.user}</div>
                <div>On: {currentPost.date}</div>
                <div>{currentPost.text}</div>
            </div>
            <hr />
            <div>Responses:</div>
            {/*<PostReplies postId={postId} />*/}
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
    return {
        loadPosts () {
          dispatch(fetchPosts());
        }
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
