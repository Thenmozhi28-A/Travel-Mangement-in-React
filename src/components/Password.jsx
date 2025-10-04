import React from 'react'

const Password = ({...props}) => {
  
  return (
      <div className='flex flex-col text-start gap-3'>
      <label className='text-xs lg:text-base text-[#354A54]'>Password</label>
      <input 
      {...props} className='p-4 bg-[rgba(219,219,219,0.2)] text-[rgba(53,74,84,0.8)] border-1 rounded-lg border-gray-300 border-soild  text-xs lg:text-sm ' type='password'placeholder='Enter Your Password'/>
      <div className='flex flex-row text-xs lg:text-sm text justify-between gap-2'>
      <p className='text-[rgba(53,74,84,0.8)]'>Remember Me</p>
      <p className='text-[#FF556E]'>Forgot Password?</p>
      </div>
    </div>
  )
}

export default Password
