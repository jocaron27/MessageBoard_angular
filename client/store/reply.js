import axios from 'axios';
// import history from '../history';

/**
 * ACTION TYPES
 */
const GET_REPLIES = 'GET_REPLIES';

/**
 * INITIAL STATE
 */
const currentReplies = [];

/**
 * ACTION CREATORS
 */
const getReplies = (replies) => ({type: GET_REPLIES, replies})

/**
 * THUNK CREATORS
 */

export const fetchReplies = (id) =>
  dispatch =>
    axios.get(`/api/posts/${id}/replies`)
      .then(res => {
        dispatch(getReplies(res.data))
      })
      .catch(err => console.error(err))

/**
 * REDUCER
 */
export default function (state = currentReplies, action) {
  switch (action.type) {
    case GET_REPLIES:
      return action.replies
    default:
      return state
  }
}
