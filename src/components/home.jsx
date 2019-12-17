import React, { Component } from 'react';

class Home extends Component {
   state = {};

   componentWillMount() {
      document.title = 'OMEGA';
   }

   render() {
      return (
         <div className='home'>
            <img src='/img/img2.jpg' alt='OMEGA' width='100%' />
            <div className='biglogo'>
               <img
                  src='/img/logo5.png'
                  alt='Logo'
                  className='bigLogo'
               />
            </div>
         </div>
      );
   }
}

export default Home;
