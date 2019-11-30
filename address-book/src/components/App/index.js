import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles.scss';
import Header from '../base-components/Header';
import Main from '../base-components/Main';

const Users = lazy(() => import(/* webpackPrefetch: true */ '../app-components/Users'));
const Settings = lazy(() => import(/* webpackPrefetch: true */ '../app-components/Settings'));

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
