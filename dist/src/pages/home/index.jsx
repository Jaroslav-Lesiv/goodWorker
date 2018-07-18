import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Block } from '../../ui'
import { Link  } from 'react-router-dom'
export default class Home extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Block justify={`space-around`} align={`flex-start`}>
          Home Component
          <Link to={`/login`}>to login page</Link>
      </Block>
    )
  }
}
