import React from 'react';

const AutocompleteOption = ({ option, handleOptionClick }) => {
  return (
    <li className="mdl-menu__item" onClick={e => handleOptionClick(e)}>{option}</li>
  );
}

export default AutocompleteOption;
