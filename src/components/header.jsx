import React, { Component } from 'react';

class Header extends Component {
   state = {};
   render() {
      return (
         <nav className='navbar navbar-expand-md sticky-top navbar-light header'>
            <a className='navbar-brand' href='/'>
               O M E G A
            </a>

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
                     <a className='nav-link' href='/'>
                        Home
                     </a>
                  </li>
                  <li className='nav-item mr-4'>
                     <a className='nav-link' href='/watches'>
                        Watches
                     </a>
                  </li>
                  <li className='nav-item mr-4'>
                     <a className='nav-link' href='/straps'>
                        Straps
                     </a>
                  </li>
                  <li className='nav-item mr-4'>
                     <a className='nav-link' href='/editableproducts'>
                        Editable Products
                     </a>
                  </li>
                  <li className='nav-item mr-4'>
                     <a className='nav-link' href='/cart'>
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
