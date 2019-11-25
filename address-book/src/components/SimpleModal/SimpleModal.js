import React from 'react';

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

export default SimpleModal;
