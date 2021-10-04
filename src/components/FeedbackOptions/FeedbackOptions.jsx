import React from 'react';
import PropTypes from 'prop-types';
import CapitalLetter from '../CapitalLetter';

export default function Buttons({ oneOfState, onChange }) {
  return (
    <ul>
      {oneOfState.map(key => (
        <li key={key}>
          <button onClick={onChange} value={key}>
            {CapitalLetter(key)}
          </button>
        </li>
      ))}
    </ul>
  );
}

Buttons.propTypes = {
  oneOfState: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
