import React, { Component } from 'react';

class AutocompleteInputText extends Component {
  render() {
    return (
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type="text" id={this.props.id}  autoComplete="off" onChange={e => this.props.onUpdateInputText(e)} value={this.props.value} />
        <label className="mdl-textfield__label" htmlFor={this.props.id}>{this.props.placeholder}</label>
      </div>
    );
  }
}

export default AutocompleteInputText;
