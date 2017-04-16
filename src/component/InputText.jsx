import React, { Component } from 'react';

class InputText extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return <input
      value={this.props.value}
      onChange={this.handleChange}
    ></input>
  }
}

export default InputText;
