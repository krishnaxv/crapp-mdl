import React, { Component } from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import componentHandler from 'exports?componentHandler!material-design-lite/material';
import AutocompleteInputText from './AutocompleteInputText';
import AutocompleteTrigger from './AutocompleteTrigger';
import AutocompleteOptionList from './AutocompleteOptionList';
import { debounce, filter, toLower } from 'lodash';

import './style.css';

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.inputTextId = this.generateRandomId();
    this.autocompleteTriggerId = this.generateRandomId();
    this.optionsReference = this.props.options || '';
    this.state = {
      value: this.props.value || '',
      options: this.optionsReference
    };
    // this.triggerAutocomplete = debounce(this.triggerAutocomplete, 1000);
  }

  componentDidMount() {
    componentHandler.upgradeDom();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value
      });
    }
  }

  generateRandomId() {
    return '_' + Math.random().toString(36).substr(2, 7);
  }

  triggerAutocomplete(e) {
    const { value } = e.target;
    const options = (value === '') ? this.optionsReference : filter(this.optionsReference, (option) => toLower(option).indexOf(toLower(value)) !== -1);
    this.setState({
      value,
      options
    });

    if (!this.autocompleteOptionsContainer.querySelector('.mdl-menu__container').classList.contains('is-visible')) {
      this.autocompleteTrigger._autocompleteTrigger.click();
    }
  }

  onOptionClick(e, cb) {
    if (this.state.value === '' && !this.autocompleteContainer.querySelector('.mdl-textfield').classList.contains('is-dirty')) {
      this.autocompleteContainer.querySelector('.mdl-textfield').classList.add('is-dirty');
    }

    this.setState({
      value: e.target.textContent.toString()
    });
    cb(e.target.textContent);
  }

  render() {
    return (
      <div className="autocomplete" ref={wrapper => this.autocompleteContainer = wrapper}>
        <AutocompleteInputText id={this.inputTextId} placeholder={this.props.placeholder} onUpdateInputText={e => this.triggerAutocomplete(e)} value={this.state.value} />
        <div className="autocomplete__options" ref={container => this.autocompleteOptionsContainer = container}>
          <AutocompleteTrigger id={this.autocompleteTriggerId} ref={trigger => this.autocompleteTrigger = trigger} />
          <AutocompleteOptionList id={this.autocompleteTriggerId} options={this.state.options} handleOptionClick={e => this.onOptionClick(e, (value) => this.props.onOptionChange(value))} />
        </div>
      </div>
    );
  }
}

export default Autocomplete;
