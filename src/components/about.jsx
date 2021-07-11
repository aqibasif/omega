import React, { Component } from 'react';
import $ from 'jquery';

class About extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'About - OMEGA';
    
    setTimeout(() => this.setState({ loading: false }), 3000);

     $('#button2').click(function () {
      $('.transform').toggleClass('transform-active');
    });
  }

  render() {
    if (this.state.loading)
      return (
        <div className='about-page'>
          <div className='about row'>
            <div className='white-box'></div>
            <div className='inner-about'>
              <h1>ABOUT US</h1>
            </div>
          </div>
        </div>
      );

    return (
      <div className='about-page'>
        <div className='about transform row'>
          <div className='white-box'></div>
          <div className='inner-about'>
            <h1>ABOUT US</h1>
          </div>

          <div className='col-sm-2'></div>
          <div className='col-sm-8'>
            <img src='/img/img42.jpg' alt='cocomo' width='100%' />

            <h1 className='about-head'>ABOUT US</h1>

            <div className='maroon-box'>
              <div className='maroon-line'></div>
            </div>

            {/* <div className='backarea'>
                  <div className='boxed transform'></div>
               </div> */}

            {/* <input
                  type='button'
                  id='button2'
                  value='Dark Mode'
                  className='btn btn-warning m-2'
               ></input> */}

            <p className='abouttext'>
              The key point to take away here is the variant prop on our motion
              element. Variants let us define multiple states for our on our
              motion element. Variants let us define multiple states for our
              animations. Variants are pre-defined visual states that a
              component can be in. By giving a component and its children
              variants with matching names, whole React trees can be animated by
              changing a single prop. By using variants, a parent can easily
              orchestrate the animations of its children with special transition
              props like staggerChildren. Variants can also be dynamic functions
              that return different props based on data passed to each
              component’s custom prop. Note: Notice how we’re using hooks. If
              hooks are new to you, check out this
            </p>
          </div>
          <div className='col-sm-2'></div>
        </div>
      </div>
    );
  }
}

export default About;
