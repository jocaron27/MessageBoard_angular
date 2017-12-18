import axios from 'axios';
// import history from '../history';

/**
 * ACTION TYPES
 */
const GET_POSTS = 'GET_POSTS';
const GET_POST = 'GET_POST';
const ADD_POST = 'ADD_POST';

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
const addPost = (post) => ({type: ADD_POST, post})

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
    axios.get(`/posts/${id}`)
      .then(res => {
        dispatch(getPost(res.data))
      })
      .catch(err => console.error(err))

export const createPost = (formFields) =>
    dispatch =>
        axios.post('/posts', formFields)
        .then(res =>
            dispatch(addPost(res.data)))
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
    case ADD_POST:
      return Object.assign({}, state, {allPosts: [state.allPosts, ...action.post]})
    default:
      return state
  }
}
