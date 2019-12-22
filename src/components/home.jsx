import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from 'jquery';

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
            <img src='/img/img2.jpg' alt='OMEGA' width='100%' />

            <div className='boxy p-2'>
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
               <img src="/img/logo.png" className="transform" alt="Htm" width="20%"/>
               <div className='boxed transform'></div>
            </div>
            <input
               type='button'
               id='button'
               value='Click Me'
               className='btn btn-warning m-2'
            ></input>
         </div>
      );
   }
}

export default Home;
