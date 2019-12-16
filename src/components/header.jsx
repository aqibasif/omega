import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
   state = {};
   render() {
      return (
         <nav className='navbar navbar-expand-md sticky-top navbar-light header'>
            <a className='navbar-brand' to='/'>
               O M E G A</a>

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
                     <a className='nav-link' to='/'>
                        Home
                     </a>
                  </li>
                  <li className='nav-item mr-4'>
                     <a className='nav-link' to='/watches'>
                        Watches
                     </a>
                  </li>
                  <li className='nav-item mr-4'>
                     <a className='nav-link' to='/straps'>
                        Straps
                     </a>
                  </li>
                  <li className='nav-item mr-4'>
                     <a className='nav-link' to='/editableproducts'>
                        Editable Products
                     </a>
                  </li>
                  <li className='nav-item mr-4'>
                     <a className='nav-link' to='/cart'>
                        Cart
                     </a>
                  </li>
               </ul>
            </div>
         </nav>
      );
   }
}

export default Header;
