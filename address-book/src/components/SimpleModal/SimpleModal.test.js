import React from 'react';
import ReactDOM from 'react-dom';
import SimpleModal from './SimpleModal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
