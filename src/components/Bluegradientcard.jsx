import React from 'react'

const Bluegradientcard = (props) => {
  return (
    <div className='w-full p-1 rounded-2xl  bg-gradient-to-br from-[#AF40FF] to-[#00DDEB]'>
        <div className='bg-[#05062D] p-4 rounded-xl text-white'>
            {props.content}
        </div>
    </div>
  )
}

export default Bluegradientcard
