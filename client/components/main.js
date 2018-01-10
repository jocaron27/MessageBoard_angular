import React from 'react'
import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import {withRouter, Link} from 'react-router-dom'
// import {logout} from '../store'

const Main = (props) => {
  const {children} = props

  return (
    <div className="app">
      <h1 className="title">Message Board</h1>
      {children}
    </div>
  )
}

export default Main;

// /**
//  * CONTAINER
//  */
// const mapState = (state) => {
//   return {
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = (dispatch) => {
//   return {
//     handleClick () {
//       dispatch(logout())
//     }
//   }
// }

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object
  // handleClick: PropTypes.func.isRequired,
  // isLoggedIn: PropTypes.bool.isRequired
}
