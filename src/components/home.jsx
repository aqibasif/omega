import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from 'jquery';
import Hero from './hero';
import Articles from './articles';
import Office from './office';
// import sr from './ScrollReveal';

class Home extends Component {
   state = {};

   componentDidMount() {
      window.scrollTo(0, 0);
      document.title = 'OMEGA';

      // const config = {
      //    origin: 'bottom',
      //    duration: 1000,
      //    delay: 150,
      //    distance: '200px',
      //    scale: 1,
      //    easing: 'ease-out',
      //    reset: true
      // };

      // sr.reveal(this.refs.box1, config);

      $('#button').click(function() {
         $('.transform').toggleClass('transform-active');
      });
   }

   render() {
      AOS.init();
      return (
         <div className='home'>
            <Hero />

            <Articles/>

            {/* <div className='boxz' ref='box1'></div> */}

            <Office />

            {/* <div className='linktezt'>
               <a href='#footer' className='link'><div></div> Footer</a>
            </div> */}

            {/* <div className='boxy p-4'>
               <h1 className='lettery'>OMEGA</h1>
            </div>

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
 */}
            {/* <div className='imagez'>
               <img src='/img/img2.jpg' alt='OMEGA' width='100%' />
               <img src='/img/logo.png' alt='log' className='imgtwo' />
            </div>
 */}
         </div>
      );
   }
}

export default Home;
