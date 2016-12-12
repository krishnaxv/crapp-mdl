import React from 'react';

const AutocompleteInputText = ({ id, placeholder, onUpdateInputText }) => {
  return (
    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input className="mdl-textfield__input" type="text" id={id} autoComplete="off" onKeyUp={e => onUpdateInputText(e)} />
      <label className="mdl-textfield__label" htmlFor={id}>{placeholder}</label>
    </div>
  );
}

export default AutocompleteInputText;