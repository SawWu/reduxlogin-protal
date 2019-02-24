import React from 'react';
import {render} from 'react-dom';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import App from './App';

const store = createStore(
    rootReducer,
);

render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector('#root'),
);
