import React, { Component } from 'react';

class InputLabel extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return <label
      value={this.props.value}
      onChange={this.handleChange}
    >{this.props.label}</label>
  }
}

export default InputLabel;
