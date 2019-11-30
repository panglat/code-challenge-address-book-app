import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Checkbox = ({
  id,
  checked,
  label,
  name,
  onChange,
}) => (
  <div className="checkbox">
    <input className="checkbox__input" type="checkbox" id={id} name={name} checked={checked} onChange={onChange} />
    <label className="checkbox__label" htmlFor={id}>{label}</label>
  </div>
);

Checkbox.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  checked: false,
  id: Math.random().toString(),
  label: '',
  onChange: null,
};

export default Checkbox;
