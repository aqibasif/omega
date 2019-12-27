import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <div className='footer'>
         {/* <div className='fo-link-box'>
            <a href='#footer' className='fo-link'>
               Footer <div></div>
            </a>
         </div> */}

         <Link className='nav-link' to='/'>
            <div className='link-t'>
               <p>Home</p>
               <div></div>
            </div>
         </Link>

         <Link className='nav-link' to='/about'>
            <div className='link-t'>
               <p>About Us</p>
               <div></div>
            </div>
         </Link>
      
      </div>
   );
};

export default Footer;
