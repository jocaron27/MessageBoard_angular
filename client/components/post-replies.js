import React from 'react';
import { connect } from 'react-redux';
import { fetchReplies } from '../store';

function AllReplies(props) {
    const { replies } = props;
    return (
      <div className="replies">
        {replies.map(reply => {          
            return (
                <div key={reply.id}>
                    <div>{reply.user}:</div>
                    <div>{reply.text}</div>
                </div>
            )
        })}
    </div>
    )
}

const mapStateToProps = function (state) {
    return {
        replies: state.currentReplies
    }
};

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
      loadReplies () {
        dispatch(fetchReplies(ownProps.postId));
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(AllReplies);
