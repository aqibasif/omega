import React from 'react';
import Article from './article';

const Articles = () => {
   return (
      <div className='card-deck articles'>
         <div className='col-1'></div>

         <div className='col-md p-4'>
            <Article
               title='Omega | De Padova opens the doors to a new design space
         in Madrid'
            />
         </div>

         <div className='col-md p-4'>
            <Article title='Omega | De Padova advertising campaign' />
         </div>

         <div className='col-md p-4'>
            <Article title='Omega | De Padova Studio Helsinki opening' />{' '}
         </div>

         <div className='col-1'></div>
      </div>
   );
};

export default Articles;
