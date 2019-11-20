import React from 'react';
import ReactDOM from 'react-dom';
import UserDetailsModal from './UserDetailsModal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserDetailsModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
