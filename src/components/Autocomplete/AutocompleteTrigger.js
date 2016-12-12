import React, { Component } from 'react';

class AutocompleteTrigger extends Component {
  render() {
    return (
      <span id={this.props.id} ref={trigger => this._autocompleteTrigger = trigger} hidden />
    );
  }
}

export default AutocompleteTrigger;