import axios from 'axios';
// import history from '../history';

/**
 * ACTION TYPES
 */
const GET_REPLIES = 'GET_REPLIES';
const WRITE_MESSAGE = 'WRITE_MESSAGE';
const WRITE_USER = 'WRITE_USER';

/**
 * INITIAL STATE
 */
const replies = {
  allReplies: [],
  newMessage: '',
  newUser: ''
}

/**
 * ACTION CREATORS
 */
const getReplies = (replies) => ({type: GET_REPLIES, replies})

export const writeMessage = (message) => ({type: WRITE_MESSAGE, message})

export const writeUser = (user) => ({type: WRITE_USER, user})

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
export default function (state = replies, action) {
  switch (action.type) {
    case GET_REPLIES:
      return Object.assign({}, state, {allReplies: action.replies})
    case WRITE_MESSAGE:
      return Object.assign({}, state, {newMessage: action.message})
    case WRITE_USER:
      return Object.assign({}, state, {newUser: action.user})
    default:
      return state
  }
}
