import React, { Component } from 'react';
// `componentHandler` from MDL to upgrade JS elements
import componentHandler from 'exports?componentHandler!material-design-lite/material';
import AutocompleteInputText from './AutocompleteInputText';
import AutocompleteTrigger from './AutocompleteTrigger';
import AutocompleteOptionList from './AutocompleteOptionList';

import './style.css';

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.inputTextId = this.generateRandomId();
    this.autocompleteTriggerId = this.generateRandomId();
    this.inputPlaceholder = 'First Name';
    this.options = ['One', 'Two', 'Three'];
  }

  componentDidMount() {
    componentHandler.upgradeDom();
  }

  generateRandomId() {
    return '_' + Math.random().toString(36).substr(2, 7);
  }

  triggerAutocomplete(e) {
    if (e.key === 'Enter') {
      this.autocompleteTrigger._autocompleteTrigger.click();
    }
  }

  render() {
    return (
      <div className="autocomplete">
        <AutocompleteInputText id={this.inputTextId} placeholder={this.inputPlaceholder} onUpdateInputText={e => this.triggerAutocomplete(e)} />
        <div className="autocomplete__options">
          <AutocompleteTrigger id={this.autocompleteTriggerId} ref={trigger => this.autocompleteTrigger = trigger} />
          <AutocompleteOptionList id={this.autocompleteTriggerId} options={this.options} />
        </div>
      </div>
    );
  }
}

export default Autocomplete;