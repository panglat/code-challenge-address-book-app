import React from 'react';
import ReactDOM from 'react-dom';
import SimpleModal from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
