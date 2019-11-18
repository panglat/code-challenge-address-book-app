import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './UserList';
import createSagaMiddleware from 'redux-saga';
import configureStore from '../../store/configureStore';
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={mockStore}><UserList /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
