import axios from 'axios';
// import history from '../history';

/**
 * ACTION TYPES
 */
const GET_POSTS = 'GET_POSTS';

/**
 * INITIAL STATE
 */
const allPosts = [];

/**
 * ACTION CREATORS
 */
const getPosts = (posts) => ({type: GET_POSTS, posts})

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
export default function (state = allPosts, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.posts
    default:
      return state
  }
}
