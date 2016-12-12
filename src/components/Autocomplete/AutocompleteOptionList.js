import React from 'react';
import AutocompleteOption from './AutocompleteOption';

const AutocompleteOptionList = ({ id, options }) => {
  return (
    <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
        htmlFor={id}>
      {
        options.map((option, index) => <AutocompleteOption key={index} option={option} />)
      }
    </ul>
  );
}

export default AutocompleteOptionList;