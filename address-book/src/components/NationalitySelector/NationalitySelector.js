import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { nationalities } from '../../utils/constants';
import Checkbox from '../Checkbox/Checkbox';

import './NationalitySelector.scss';

const NationalitySelector = ({ selectedNationalities }) => {
  const [filter, setFilter] = useState([]);

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

  return (
    <div>
      Select from which nationalities users are fetched: debugger;
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
    </div>
  );
};

NationalitySelector.propTypes = {
  selectedNationalities: PropTypes.arrayOf(PropTypes.string),
};

NationalitySelector.defaultProps = {
  selectedNationalities: [],
};

export default NationalitySelector;
