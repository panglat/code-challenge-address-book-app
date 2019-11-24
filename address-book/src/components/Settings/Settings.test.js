import React from 'react';
import ReactDOM from 'react-dom';
import NationalitySelector from './NationalitySelector';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NationalitySelector />, div);
  ReactDOM.unmountComponentAtNode(div);
});
