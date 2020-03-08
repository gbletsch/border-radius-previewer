import React, { Component } from 'react'

class MyInput extends Component {
  render () {
    return (
      <input
        size='1'
        style={{
          textAlign: 'center'
        }}
        type='text'
        placeholder={this.props.text}
      />
    )
  }
}

export default MyInput
