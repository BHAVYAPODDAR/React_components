import React from 'react';
import Template from './Template';



const card = (props) => {
  return (
        
    <div className='p-8  bg-blue-500 rounded-xl border-r-2 border-b-2 shadow-md shadow-zinc-300 backdrop-blur-2xl'>
        <article className=' bg-blue-200 mb-5 px-5 py-2 rounded-md text-black text-2xl font-semibold text-center'>
            {props.title}
        </article>
        <figcaption>
            {props.caption}
        </figcaption>
    </div>
    
  )
}

export default card
