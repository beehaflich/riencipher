import React, { Component } from 'react';

class InputSelect extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const options = this.props.options.map((option) =>
      <option value={option.value} key={option.key || option.value}>
        {option.name || option.value}
      </option>
    );
    return <select
      value={this.props.value}
      onChange={this.handleChange}
    >{options}</select>;
  }
}

export default InputSelect;
