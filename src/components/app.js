import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAppsIfNeeded } from '../redux/actions'

import Game from './game'
import Card from './card'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAppsIfNeeded())
  }


  render() {
    const { isFetching, apps } = this.props
    const totalapps = apps.length;

    return (
       <>
         <Game></Game>
       </>
    );
  }
}
 
function mapStateToProps({ isFetching, apps }) {
  return {
    isFetching,
    apps
  }
}
 
export default connect(mapStateToProps)(App)
