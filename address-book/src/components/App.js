import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import UserList from './UserList/UserList';
import Header from './Header/Header';
import Main from './Main/Main';
import Settings from './Settings/Settings';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
      <Header />
        <Switch>
          <Route path="/settings">
            <Main>
              <Settings />
            </Main>
          </Route>
          <Route path="/">
            <Main>
              <UserList />
            </Main>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
