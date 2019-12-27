import React, { Component } from 'react';

class About extends Component {
   state = {};
   componentDidMount() {
      window.scrollTo(0, 0);
      document.title = 'About - OMEGA';
   }

   render() {
      return (
         <div className='about row'>
            <div className='col-sm-3'></div>
            <div className='col-sm-6'>

               <img src='/img/img4.jpg' alt='cocomo' width='100%' />

               <p className='m-5 abouttext'>
                  The key point to take away here is the variant prop on our
                  motion element. Variants let us define multiple states for our
                  animations. Variants are pre-defined visual states that a
                  component can be in. By giving a component and its children
                  variants with matching names, whole React trees can be
                  animated by changing a single prop. By using variants, a
                  parent can easily orchestrate the animations of its children
                  with special transition props like staggerChildren. Variants
                  can also be dynamic functions that return different props
                  based on data passed to each component’s custom prop. Note:
                  Notice how we’re using hooks. If hooks are new to you, check
                  out this. The key point to take away here is the variant prop
                  on our motion element. Variants let us define multiple states
                  for our animations. Variants are pre-defined visual states
                  that a component can be in. By giving a component and its
                  children variants with matching names, whole React trees can
                  be animated by changing a single prop. By using variants, a
                  parent can easily orchestrate the animations of its children
                  with special transition props like staggerChildren. Variants
                  can also be dynamic functions that return different props
                  based on data passed to each component’s custom prop. Note:
                  Notice how we’re using hooks. If hooks are new to you, check
                  out this. The key point to take away here is the variant prop
                  on our motion element. Variants let us define multiple states
                  for our animations. Variants are pre-defined visual states
                  that a component can be in. By giving a component and its
                  children variants with matching names, whole React trees can
                  be animated by changing a single prop. By using variants, a
                  parent can easily orchestrate the animations of its children
                  with special transition props like staggerChildren. Variants
                  can also be dynamic functions that return different props
                  based on data passed to each component’s custom prop. Note:
                  Notice how we’re using hooks. If hooks are new to you, check
                  out this. The key point to take away here is the variant prop
                  on our motion element. Variants let us define multiple states
                  for our animations. Variants are pre-defined visual states
                  that a component can be in. By giving a component and its
                  children variants with matching names, whole React trees can
                  be animated by changing a single prop. By using variants, a
                  parent can easily orchestrate the animations of its children
                  with special transition props like staggerChildren. Variants
                  can also be dynamic functions that return different props
                  based on data passed to each component’s custom prop. Note:
                  Notice how we’re using hooks. If hooks are new to you, check
                  out this
               </p>
            </div>
            <div className='col-sm-3'></div>
         </div>
      );
   }
}

export default About;
