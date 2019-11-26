import React from 'react';
import PropTypes from 'prop-types';

import './SimpleModal.scss';
import Button from '../Button/Button';

const SimpleModal = ({ children, onCloseModal }) => (
  <div className="modal">
    <section className="modal__main">
      {children}
      <div className="modal__actions">
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
