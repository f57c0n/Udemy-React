//Download the React DevTools for a better development experience: https://fb.me/react-devtools

//similar to bootstrap with predefined css formats.  www.tachyons.io/docs
import 'tachyons';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore } from 'redux';

import * as serviceWorker from './serviceWorker';

import './index.css';
//Father of all the components
import App from './containers/App';
import {searchRobots} from './reducers';

//Built-in functions createStore to put searchRobots in store.  store passed down where it is used [by App]
const store = createStore(searchRobots)

// ReactDOM.render(<App store={store}/>, document.getElementById('root')); 
// Wrapping App with Provider w/c will pass down store to all components in App 
ReactDOM.render(
                <Provider store={store}>
                    <App/>
                </Provider>
                , document.getElementById('root'));


serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA