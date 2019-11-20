import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.scss';
import UserList from './UserList/UserList';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <UserList />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
