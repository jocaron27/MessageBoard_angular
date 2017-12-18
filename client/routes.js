import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Router} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main, AllPosts, AddPost, SinglePost} from './components'
import {fetchPosts} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    return (
      <Router history={history}>
        <Main>
          <Switch>
            <Route exact path="/" component={AllPosts} />
            <Route exact path="/posts/:id" component={SinglePost} />
            <Route exact path="/posts/new" component={AddPost} />
          </Switch>
        </Main>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    posts: state.allPosts
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(fetchPosts())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
}
