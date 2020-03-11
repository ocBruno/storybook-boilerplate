import React from 'react'
import PropTypes from 'prop-types'

export default class TextInput {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    props.this.handleChange = this.handleChange.bind(this)
  }
  handleChange (event) {
    // DEFAULT 50ms debounce
    this.setState({
      value: event.target.value
    })
    // CUSTOM handle change event
  }

  render () {
    return (
      <>
        <label>
          {this.props.label}
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
      </>
    )
  }
}
TextInput.propTypes = {
  label: PropTypes.string
}
TextInput.defaultProps = {
  label: 'Default Label'
}
