//Download the React DevTools for a better development experience: https://fb.me/react-devtools

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Father of all the components
import App from './containers/App';

import * as serviceWorker from './serviceWorker';

//similar to bootstrap with predefined css formats.  www.tachyons.io/docs
import 'tachyons';

ReactDOM.render(<App/>, document.getElementById('root'));


serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA