import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import configureStore from '../store/configureStore';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={mockStore} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
