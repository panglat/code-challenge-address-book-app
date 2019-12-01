import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import NationalitySelector from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><NationalitySelector /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
