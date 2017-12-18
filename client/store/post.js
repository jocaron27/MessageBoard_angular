import axios from 'axios';
// import history from '../history';

/**
 * ACTION TYPES
 */
const GET_POSTS = 'GET_POSTS';
const GET_POST = 'GET_POST';

/**
 * INITIAL STATE
 */
const initialState = {
    allPosts: [],
    currentPost: {}
}

/**
 * ACTION CREATORS
 */
const getPosts = (posts) => ({type: GET_POSTS, posts})
const getPost = (post) => ({type: GET_POST, post})

/**
 * THUNK CREATORS
 */
export const fetchPosts = () =>
  dispatch =>
    axios.get('/api/posts')
      .then(res => {
        dispatch(getPosts(res.data))
      })
      .catch(err => console.log(err))

export const fetchPost = (id) =>
  dispatch =>
    axios.get(`/api/posts/${id}`)
      .then(res => {
        dispatch(getPost(res.data))
      })
      .catch(err => console.error(err))

export const createPost = (formFields, history) =>
    dispatch =>
        axios.post('/api/posts', formFields)
        .then(() =>
            dispatch(fetchPosts()))
        .then(() => history.push('/'))
        .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return Object.assign({}, state, {allPosts: action.posts})
    case GET_POST:
      return Object.assign({}, state, {currentPost: action.post})
    default:
      return state
  }
}
