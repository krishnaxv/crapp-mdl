import React, { Component } from 'react';
import Autocomplete from '../Autocomplete';

class Typeahead extends Component {
  constructor(props) {
    super(props);
    this.placeholder = 'Write something ...';
    this.options = [
      'You may not use the reference!',
      'What is your name?',
      'Technology is really great.',
      'US elections!',
      'React.js is an amazing library!',
      'Wow!',
      'Really? Are you going to buy a Tesla?'
    ];
    this.state = {
      value: 'Remove this'
    };
  }

  // Not required now
  // componentDidMount() {
  //   // Simulate external API call
  //   setTimeout(() => {
  //     this.setState({
  //       value: 'Asynchronous data arrived.'
  //     });
  //   }, 10000);
  // }

  // Retrieve whatever has been selected by the user
  handleOptionChange(value) {
    console.log(value);
  }

  render() {
    return (
      <div className="typeahead">
        <p>Autocomplete</p>
        <Autocomplete placeholder={this.placeholder} options={this.options} value={this.state.value} onOptionChange={(value) => this.handleOptionChange(value)} />
      </div>
    )
  }
}

export default Typeahead;
