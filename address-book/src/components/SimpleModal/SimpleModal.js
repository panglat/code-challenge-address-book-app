import React from 'react';

import './SimpleModal.scss';

const SimpleModal = ({children, onCloseModal}) => (
  <div className="modal">
    <section className="modal__main">
      {children}
      <button className="modal__close-button" onClick={onCloseModal}>Close</button>
    </section>
  </div>
);

export default SimpleModal;
