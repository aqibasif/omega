import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from 'jquery';
import Hero from './hero';

class Home extends Component {
   state = {};

   componentDidMount() {
      $('#button').click(function() {
         $('.transform').toggleClass('transform-active');
      });
   }

   componentWillMount() {
      window.scrollTo(0, 0);
      document.title = 'OMEGA';
   }

   render() {
      AOS.init();
      return (
         <div className='home'>
            <Hero />
       
            <img src='/img/hero-back.jpg' alt='OMEGA' width='100%' />
            <a href='#footer'>Footer</a>
            <div className='boxy p-4'>
               <h1 className='lettery'>OMEGA</h1>
            </div>
            {/* 
            <div
               data-aos='fade-right'
               data-aos-anchor='#example-anchor'
               data-aos-offset='500'
               data-aos-duration='500'
               className='boxed'
            ></div> */}

            <div className='backarea'>
               <img
                  src='/img/logo.png'
                  className='transform'
                  alt='Htm'
                  width='20%'
               />
               <div className='boxed transform'></div>
            </div>

            <input
               type='button'
               id='button'
               value='Click Me'
               className='btn btn-warning m-2'
            ></input>

            <div className='imagez'>
               <img src='/img/img2.jpg' alt='OMEGA' width='100%' />
               <img src='/img/logo.png' alt='log' className='imgtwo' />
            </div>

            <div className='box1' id='footer'>
               <div className='box2'>
                  <p>
                     bhjbjhb hjbjhb jhbjhbjb jhbjhb jhhbjhb jhbjhb jhbjhb jhbjhb
                     jhbjhb{' '}
                  </p>
                  <p>
                     bhjbjhb hjbjhb jhbjhbjb jhbjhb jhhbjhb jhbjhb jhbjhb jhbjhb
                     jhbjhb{' '}
                  </p>
                  <p>
                     bhjbjhb hjbjhb jhbjhbjb jhbjhb jhhbjhb jhbjhb jhbjhb jhbjhb
                     jhbjhb{' '}
                  </p>
                  <p>
                     bhjbjhb hjbjhb jhbjhbjb jhbjhb jhhbjhb jhbjhb jhbjhb jhbjhb
                     jhbjhb{' '}
                  </p>
                  <p>
                     bhjbjhb hjbjhb jhbjhbjb jhbjhb jhhbjhb jhbjhb jhbjhb jhbjhb
                     jhbjhb{' '}
                  </p>
                  <p>
                     bhjbjhb hjbjhb jhbjhbjb jhbjhb jhhbjhb jhbjhb jhbjhb jhbjhb
                     jhbjhb{' '}
                  </p>
                  <p>
                     bhjbjhb hjbjhb jhbjhbjb jhbjhb jhhbjhb jhbjhb jhbjhb jhbjhb
                     jhbjhb{' '}
                  </p>
                  <p>
                     bhjbjhb hjbjhb jhbjhbjb jhbjhb jhhbjhb jhbjhb jhbjhb jhbjhb
                     jhbjhb{' '}
                  </p>
               </div>
            </div>
         </div>
      );
   }
}

export default Home;
