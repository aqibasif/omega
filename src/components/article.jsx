import React from 'react';

const Article = ({ title }) => {
   return (
      <div className='article'>
         <div className='img-box'>
            <img src='/img/hero-back.jpg' alt='...' />
         </div>
         <div className='card-body article-box'>
            <div className='line'></div>
            <h5 className='card-title'>{title}</h5>
         </div>
      </div>
   );
};
export default Article;
