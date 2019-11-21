import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.scss';
import UserList from './UserList/UserList';
import Header from './Header/Header';
import Main from './Main/Main';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Main>
          <Switch>
            <Route path="/">
              <UserList />
            </Route>
          </Switch>
        </Main>
      </Router>
    </Provider>
  );
};

export default App;
