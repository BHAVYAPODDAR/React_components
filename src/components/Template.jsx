import React from 'react'

const Template = (props) => {
    
  return (
    <div className='h-96 sm:w-[24%] w-fit px-12 bg-zinc-900 flex flex-col justify-center items-center rounded-xl'>

        {props.children} 
        <div className='flex justify-between w-full text-lg text-white mt-12'>
            <div>{ props.type }</div>
            <div>{ props.compName }</div>
        </div>        
        
    </div>
  )
}

Template.defaultProps = {
    type: "type",
    compName: "compName",
}

export default Template
