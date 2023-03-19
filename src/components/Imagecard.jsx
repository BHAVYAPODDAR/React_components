import React from 'react';
import rocket from '../img/rocketride.png';

const Imagecard = (props) => {
  return (
    <li
          class="w-2/3 sm:w-5/6 items-center flex flex-col border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">

          <img class="w-1/2 mb-6" src={rocket} alt="Error loading" />
          <h3 class="text-3xl text-center text-slate-900 dark:text-white">
            {props.title}
          </h3>
          <p class="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
            $
          </p>
          <p class=" sm:hidden text-center text-lg mt-2 text-slate-500">
            {props.desc}
          </p>
        </li>
  )
}

export default Imagecard
