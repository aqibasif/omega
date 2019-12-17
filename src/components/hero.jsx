import React from 'react';

const Hero = () => {
   return (
      <div className='row heroback'>
         <div className='col-lg-1' />
         <div className='col-lg-11 hero'>
            <h1 className='display-4'>
               Swedish designed.
               <br />
               German made.
            </h1>
            <p className='lead'>
               Minimalist watches for those who wear things with care.
            </p>
            <hr className='my-4' />
         </div>
      </div>
   );
};

export default Hero;
