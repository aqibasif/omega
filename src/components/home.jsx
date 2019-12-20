import React, { Component } from 'react';

class Home extends Component {
   state = {};

   componentWillMount() {
      window.scrollTo(0, 0);
      document.title = 'OMEGA';
   }

   render() {
      return (
         <div className='home'>
            <img src='/img/img2.jpg' alt='OMEGA' width='100%' />
            {/* <div className='biglogo'>
               <img src='/img/logo5.png' alt='Logo' className='bigLogo' />
            </div> */}

            <div className='boxy p-2'>
               <h1>OMEGA</h1>
            </div>
         </div>
      );
   }
}

export default Home;
