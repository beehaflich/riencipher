import React, { Component } from 'react';

import InputLabel from './InputLabel';
import InputSelect from './InputSelect';
import InputText from './InputText';
import InputTextarea from './InputTextarea';

// import cipher from 'cipher';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // input text as string
      'plaintext': props.plaintext || '',
      // the code of the classname for cipher
      // this is the value of the cipher select
      'cipher': props.cipher || '',
      // the random seed we are using, if applicable
      'seed': props.seed || '',
      // the key we are using, if applicable
      'key': props.key || '',
      // if we are decoding the text instead of encoding it
      'isDecoding': props.isDecoding || false,
    };

    this.handlePlaintextChange = this.handlePlaintextChange.bind(this);
    this.handleCipherChange = this.handleCipherChange.bind(this);
    this.handleSeedChange = this.handleSeedChange.bind(this);
    this.handleKeyChange = this.handleKeyChange.bind(this);
    this.handleIsDecodingChange = this.handleIsDecodingChange.bind(this);
  }

  handlePlaintextChange(value) {
    this.setState({'plaintext': value});
  }
  handleCipherChange(value) {
    this.setState({'cipher': value});
  }
  handleSeedChange(value) {
    this.setState({'seed': value});
  }
  handleKeyChange(value) {
    this.setState({'key': value});
  }
  handleIsDecodingChange(value) {
    this.setState({'isDecoding': (value === 'decode')});
  }


  getCipherOptions() {
    return [];
  }

  render() {
    return (
      <div>
      <form id="App">

      <InputLabel
        label={'Encode or Decode?'}
      ></InputLabel>
      <InputSelect
        onChange={this.handleIsDecodingChange}
        options={[
          {'value': 'encode', 'name': 'Encode'},
          {'value': 'decode', 'name': 'Decode'}
        ]}
        value={this.state.isDecoding ? 'decode' : 'encode'}
      ></InputSelect>

      <InputLabel
        label={'Text to ' + (this.state.isDecoding ? 'Decode' : 'Encode')}
      ></InputLabel>
      <InputTextarea
        value={this.state.plaintext}
        onChange={this.handlePlaintextChange}
      ></InputTextarea>

      <InputLabel
        label={'Cipher to use'}
      ></InputLabel>
      <InputSelect
        value={''}
        options={this.getCipherOptions()}
        onChange={this.handleCipherChange}
      ></InputSelect>

      <InputLabel
        label={'Key to ' + (this.state.isDecoding ? 'decode' : 'encode') + ' with'}
      ></InputLabel>
      <InputText
        value={this.state.key || ''}
        onChange={this.handleKeyChange}
      ></InputText>

      <InputLabel
        label={'Seed to use for random number generation (blank for random)'}
      ></InputLabel>
      <InputText
        value={this.state.seed || ''}
        onChange={this.handleSeedChange}
      ></InputText>

      </form>
      <div>{this.state.plaintext}</div>
      </div>
    );
  }

}


export default App;
