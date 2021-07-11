import React from 'react';

const Like = props => {
   let classes = 'fa fa-star';
   const { Like, onLike } = props;

   if (!Like) classes += '-o';

   return (
      <i
         onClick={onLike}
         className={classes}
         aria-hidden='true'
         style={{ cursor: 'pointer' }}
      />
   );
};

export default Like;
