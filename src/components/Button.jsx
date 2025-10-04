// import React from 'react'

// const Button = () => {
//   return (
//     <div>
//       <button className='p-3 w-100 bg-[#FF556E] rounded-lg border-soild text-sm md:text-base text-white cursor-pointer'style={{width:"-webkit-fill-available"}}>Login</button>
//     </div>
//   )
// }

// export default Button;

import React from "react";

const Button = ({ children = "Login", style = {}, className = "", ...props }) => {
  return (
    <button
      className={`p-3 bg-[#FF556E] rounded-lg text-sm md:text-base text-white cursor-pointer ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

