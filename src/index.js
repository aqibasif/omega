import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
//import Application from './components/application'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

console.log(process.env);

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
