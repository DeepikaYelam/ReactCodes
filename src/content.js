import React, { Component } from 'react'

export default class content extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.firstName}</h1>
      </div>
    )
  }
}
