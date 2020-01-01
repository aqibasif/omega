import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <React.Fragment>
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
         <div className='copyright'>
            <p>Copyright © 2020 Omega - Developed by Muhammad Aqib Asif</p>
         </div>
      </React.Fragment>
   );
};

export default Footer;
