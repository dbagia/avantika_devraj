import 'typeface-montserrat'
import 'typeface-lato'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './freelancer.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import logo from './logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faSquare } from '@fortawesome/free-solid-svg-icons'

library.add(faStar)
library.add(faSquare)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
