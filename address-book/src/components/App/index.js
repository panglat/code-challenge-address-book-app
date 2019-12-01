/**
 * @module App
 */
import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../base-components/Header';
import Main from '../base-components/Main';

import NavBar from '../app-components/NavBar';

import './styles.scss';

// Code Splitting
const Users = lazy(() => import(/* webpackPrefetch: true */ '../app-components/Users'));
const Settings = lazy(() => import(/* webpackPrefetch: true */ '../app-components/Settings'));

/**
 *  Render the app
 * @param {*} store redux store 
 */
const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header>
          <NavBar />
        </Header>
        <Switch>
          <Route path="/settings">
            <Main>
              <Settings />
            </Main>
          </Route>
          <Route path="/">
            <Main>
              <Users />
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
