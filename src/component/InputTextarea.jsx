import React, { Component } from 'react';

class InputTextarea extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return <textarea
      value={this.props.value}
      onChange={this.handleChange}
    ></textarea>
  }
}

export default InputTextarea;
