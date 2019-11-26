import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import configureStore from '../../store/configureStore';

import Header from './Header';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={mockStore}><MemoryRouter><Header /></MemoryRouter></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
