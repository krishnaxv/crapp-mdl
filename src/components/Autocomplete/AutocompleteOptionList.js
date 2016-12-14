import React from 'react';
import AutocompleteOption from './AutocompleteOption';

const AutocompleteOptionList = ({ id, options, handleOptionClick }) => {
  return (
    <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect" htmlFor={id}>
      {
        (options.length === 0) ? <li className="mdl-menu__item">No search result available.</li> : options.map((option, index) => <AutocompleteOption key={index} option={option} handleOptionClick={e => handleOptionClick(e)} />)
      }
    </ul>
  );
}

export default AutocompleteOptionList;
