import axios from 'axios';
// import history from '../history';

/**
 * ACTION TYPES
 */
const GET_REPLIES = 'GET_REPLIES';

/**
 * INITIAL STATE
 */
const allReplies = [];

/**
 * ACTION CREATORS
 */
const getReplies = (replies) => ({type: GET_REPLIES, replies})

/**
 * THUNK CREATORS
 */

export const fetchReplies = () =>
  dispatch =>
    axios.get(`/api/replies`)
      .then(res => {
        dispatch(getReplies(res.data))
      })
      .catch(err => console.error(err))

export const createReply = (formFields) =>
dispatch =>
    axios.post('/api/replies', formFields)
    .then(() =>
        dispatch(fetchReplies()))
    .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = allReplies, action) {
  switch (action.type) {
    case GET_REPLIES:
      return action.replies
    default:
      return state
  }
}
