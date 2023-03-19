import React from 'react'

const Gradientcard = (props) => {
  return (
    <div className='w-full text-white font-bold bg-gradient-to-br from-lime-400 to-cyan-500 p-5 rounded-xl border-2 border-white'>
        {props.content}
        
    </div>
  )
}

export default Gradientcard
