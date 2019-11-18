import React from 'react';
import { Provider } from 'react-redux';

import './App.scss';
import UserList from './UserList/UserList';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <div>
        <UserList />
      </div>
    </Provider>
  );
};

export default App;
