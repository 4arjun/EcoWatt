import React from 'react'

const AccountButton = () => {
  return (
    <div>
<button
  className="group flex items-center justify-start w-11 h-11 bg-white rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
>
  <div
    className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
  >
    <svg viewBox="0 0 344 384" height="26.72093023255814" width="24">
    <path
      d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z"
      fill="#000000"
    ></path>
  </svg>
  
  </div>
  <div
    className="absolute right-5 transform translate-x-full opacity-0 text-black text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
  >
    Account
  </div>
</button>

    </div>
  )
}

export default AccountButton
