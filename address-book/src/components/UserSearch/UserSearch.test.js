import React from 'react';
import ReactDOM from 'react-dom';
import UserSearch from './UserSearch';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import configureStore from '../../store/configureStore';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={mockStore}><UserSearch /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
