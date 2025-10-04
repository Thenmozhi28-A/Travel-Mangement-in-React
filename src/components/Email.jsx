import React from 'react'

const Email = ({...props}) => {
  
  return (
    <div className='flex flex-col text-start gap-3'>
       <label className='text-xs lg:text-base text-[#354A54]'>Email</label>
      <input 
      {...props} className='p-4  bg-[rgba(219,219,219,0.2)] text-[rgba(53,74,84,0.8)] border-1 rounded-lg border-gray-300 border-soild 
      text-xs lg:text-sm ' type='text'placeholder='Enter Your Email'/>
    </div>
  )
}

export default Email;
