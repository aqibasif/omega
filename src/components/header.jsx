import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
   state = {};
   render() {
      return (
         <nav className='navbar navbar-expand-md sticky-top navbar-light header'>
            <Link className='navbar-brand' to='/'>
               <img src='/img/logo4.png' alt='Logo' width="100px"/>
            </Link>

            <button
               className='navbar-toggler'
               type='button'
               data-toggle='collapse'
               data-target='#navbarNav'
               aria-controls='navbarNav'
               aria-expanded='false'
               aria-label='Toggle navigation'
            >
               <span className='navbar-toggler-icon' />
            </button>

            <div className='collapse navbar-collapse' id='navbarNav'>
               <ul className='navbar-nav ml-auto '>
                  <li className='nav-item mr-4'>
                     <Link className='nav-link' to='/'>
                        Home
                     </Link>
                  </li>
                  <li className='nav-item mr-4'>
                     <Link className='nav-link' to='/watches'>
                        Watches
                     </Link>
                  </li>
                  <li className='nav-item mr-4'>
                     <Link className='nav-link' to='/straps'>
                        Straps
                     </Link>
                  </li>
                  <li className='nav-item mr-4'>
                     <Link className='nav-link' to='/editableproducts'>
                        Editable Products
                     </Link>
                  </li>
                  <li className='nav-item mr-4'>
                     <Link className='nav-link' to='/cart'>
                        Cart
                     </Link>
                  </li>
               </ul>
            </div>
         </nav>
      );
   }
}

export default Header;
