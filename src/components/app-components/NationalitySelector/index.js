/**
 * @file Render the navigation bar.
 * @module app-components/NationalitySelector
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { nationalities } from '../../../utils/constants';
import Checkbox from '../../base-components/Checkbox';
import Button from '../../base-components/Button';

import './styles.scss';

/**
 * @lends module:app-components/NationalitySelector
 */
const NationalitySelector = ({
  className,
  onSetSelectedNationalities,
  selectedNationalities,
}) => {
  const [filter, setFilter] = useState(selectedNationalities);

  /**
   * Manage checkboxes onChange event and change the filter
   * @param {event} event checkbox OnChange event handler
   */
  const onCheckboxChanged = (event) => {
    event.stopPropagation();
    const { target } = event;
    const { name } = target;

    if (filter.includes(name)) {
      setFilter(filter.filter((chk) => chk !== name));
    } else {
      setFilter([...filter, name]);
    }
  };

  /**
   * Manage checkboxes onChange event and change the filter
   * @param {event} event form  event handler
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    onSetSelectedNationalities(filter);
  };

  return (
    <form className={cn('nationality-selector', className)} onSubmit={(event) => handleSubmit(event)}>
      <p>Select from which nationalities users are fetched:</p>
      {Object.entries(nationalities).map(([iso, nationality]) => (
        <Checkbox
          checked={filter.includes(iso)}
          id={iso}
          key={iso}
          label={nationality}
          name={iso}
          onChange={(event) => onCheckboxChanged(event)}
        />
      ))}
      <Button type="submit">Save</Button>
      <Link to="/"><Button buttonType="secondary">Cancel</Button></Link>
    </form>
  );
};

NationalitySelector.propTypes = {
  className: PropTypes.string,
  onSetSelectedNationalities: PropTypes.func,
  selectedNationalities: PropTypes.arrayOf(PropTypes.string),
};

NationalitySelector.defaultProps = {
  className: '',
  onSetSelectedNationalities: () => {},
  selectedNationalities: [],
};

export default NationalitySelector;
