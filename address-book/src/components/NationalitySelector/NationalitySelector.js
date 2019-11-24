import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { nationalities } from '../../utils/constants';
import Checkbox from '../Checkbox/Checkbox';

import './NationalitySelector.scss';

const NationalitySelector = ({
  onSetSelectedNationalities,
  selectedNationalities,
}) => {
  const [filter, setFilter] = useState(selectedNationalities);
  
  const onCheckboxChanged = event => {
    event.stopPropagation();
    const { target } = event;
    const { name } = target;

    if (filter.includes(name)) {
      setFilter(filter.filter(chk => chk !== name));
    } else {
      setFilter([...filter, name]);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSetSelectedNationalities(filter);
  };

  return (
    <form onSubmit={event => handleSubmit(event)}>
      Select from which nationalities users are fetched:
      {Object.entries(nationalities).map(([iso, nationality]) => {
        return (
          <Checkbox
            checked={filter.includes(iso)}
            id={iso}
            key={iso}
            label={nationality}
            name={iso}
            onChange={event => onCheckboxChanged(event)}
          />
        );
      })}
      <input type="submit" value="Save" />
    </form>
  );
};

NationalitySelector.propTypes = {
  onSetSelectedNationalities: PropTypes.func,
  selectedNationalities: PropTypes.arrayOf(PropTypes.string),
};

NationalitySelector.defaultProps = {
  onSetSelectedNationalities: () => {},
  selectedNationalities: [],
};

export default NationalitySelector;
