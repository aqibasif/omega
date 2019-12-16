import React, { Component } from 'react';
import Header from './header';
import Hero from './hero';

class Application extends Component {
   state = {};
   render() {
      return (
         <div className='back'>
            <Header />
            <Hero/>
            <Hero/>
         </div>
      );
   }
}

export default Application;
