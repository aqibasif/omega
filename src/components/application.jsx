import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import Home from './home';
import './style.css';

class Application extends Component {
   state = {};
   render() {
      return (
         <Router>
            <div>
               <Header />
               <Switch>
                  <Route exact path='/' component={Home} />
               </Switch>
            </div>
         </Router>
      );
   }
}

export default Application;
