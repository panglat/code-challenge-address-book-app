/**
 * @file Render a simple modal element.
 * @module base-components/SimpleModal
 */
import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import './styles.scss';

const SimpleModal = ({ children, onCloseModal }) => (
  <div className="simple-modal">
    <section className="simple-modal__main">
      {children}
      <div className="simple-modal__actions">
        <Button onClick={onCloseModal}>Close</Button>
      </div>
    </section>
  </div>
);

SimpleModal.propTypes = {
  children: PropTypes.node,
  onCloseModal: PropTypes.func,
};

SimpleModal.defaultProps = {
  children: null,
  onCloseModal: () => {},
};


export default SimpleModal;
