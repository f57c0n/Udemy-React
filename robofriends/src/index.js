//Download the React DevTools for a better development experience: https://fb.me/react-devtools

//similar to bootstrap with predefined css formats.  www.tachyons.io/docs
import 'tachyons';

import React from 'react';
import ReactDOM from 'react-dom';
// Provider passes down the store to the components
// connect subscribes to store (become smart components => called containers)
import { Provider} from 'react-redux';
//applyMiddleware => function to apply any imported middleware
import { createStore, combineReducers, applyMiddleware } from 'redux';
// thunkMiddleware => to be able to use action/reducers on Async actions / APIs
import thunkMiddleware from 'redux-thunk';
// createLogger for debugging
import { createLogger } from 'redux-logger';

import * as serviceWorker from './serviceWorker';

import './index.css';
//Father of all the components
import App from './containers/App';
import { requestRobots, searchRobots } from './reducers'

//create a middleware variable.  import applyMiddleware to use it
const logger = createLogger()

//Built-in functions createStore to put searchRobots, and other functions in reducers in store.  
//store passed down [in Provider] where it is used [by App]
const rootReducers = combineReducers({requestRobots, searchRobots})
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

// ReactDOM.render(<App store={store}/>, document.getElementById('root')); 
// Wrapping App with Provider w/c will pass down store to all components in App 
// store passes the states to App
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA