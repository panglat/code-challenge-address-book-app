import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import mySaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState = {}) {
  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });
  
  // mount it on the Store
  const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

  // then run the saga
  sagaMiddleware.run(mySaga);
  return store;
}
