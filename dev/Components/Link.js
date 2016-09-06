import React from 'react';

const Link = ({onClick, children, filter}) => (

    <a href="#" onClick={(e)=>{
      e.preventDefault();
      onClick();
    }}>{children}</a>

)
export default Link;
