import React from 'react';
import ReactDOM from 'react-dom';
import UserListItem from './UserListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
