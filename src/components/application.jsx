import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import Home from './home';
import Cart from './cart';
import './style.css';

class Application extends Component {
   state = {};
   render() {
      return (
         <Router>
            <React.Fragment>
               <Header />
               <div className='page'>
                  <Switch>
                     <Route exact path='/' component={Home} />
                     <Route exact path='/cart' component={Cart} />
                  </Switch>
               </div>
            </React.Fragment>
         </Router>
      );
   }
}

export default Application;
