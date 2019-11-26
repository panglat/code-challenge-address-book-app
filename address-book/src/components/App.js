import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import Header from './Header/Header';
import Main from './Main/Main';

const UserList = lazy(() => import(/* webpackPrefetch: true */ './UserList/UserList'));
const Settings = lazy(() => import(/* webpackPrefetch: true */ './Settings/Settings'));

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({}),
};

App.defaultProps = {
  store: null,
};

export default App;
