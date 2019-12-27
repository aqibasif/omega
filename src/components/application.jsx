import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './home';
import About from './about';
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
                     <Route exact path='/about' component={About} />
                  </Switch>
               </div>
               <Footer />
            </React.Fragment>
         </Router>
      );
   }
}

export default Application;
