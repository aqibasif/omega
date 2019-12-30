import React, { Component } from 'react';

class Loading extends Component {
   state = {};
   render() {
      return (
         <div className='load-page'>
            <div className='loading'>
               <img src='/img/logo2.png' alt='loading' />
            </div>
         </div>
      );
   }
}

export default Loading;
