import React, { useState } from 'react';
import furnitureImage from '../public/images/furniture.avif';
import '../public/css/hamburger.css'
import 'remixicon/fonts/remixicon.css'
import ThreeDCardDemo from './ThreeDCardDemo';
import SparklesPreview from './SparklesPreview';

function App() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [istogglleButton, settogglleButton] = useState(false);

  return (
    <>
      <div className='flex justify-center items-center h-[65px] w-screen bg-white shadow-2xl'>
        {/* togla btn and logo section start  */}
        <div className="w-1/4 h-[60px] sm:w-1/3 lg:w-1/4 flex justify-start items-center">
          <div className='ml-3 cursor-pointer flex justify-center items-center h-[45px] w-[45px]'><svg class="g_1 gUZ U9O kVc" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M0 12a12 12 0 0 0 7.73 11.22 12 12 0 0 1 .03-3.57l1.4-5.94S8.8 13 8.8 11.94c0-1.66.96-2.9 2.16-2.9 1.02 0 1.51.77 1.51 1.68 0 1.03-.65 2.56-.99 3.98-.28 1.19.6 2.16 1.77 2.16 2.12 0 3.76-2.24 3.76-5.47 0-2.86-2.06-4.86-5-4.86a5.17 5.17 0 0 0-5.39 5.18c0 1.03.4 2.13.9 2.73q.12.17.08.34l-.34 1.36q-.06.31-.4.16c-1.49-.7-2.42-2.88-2.42-4.63 0-3.77 2.74-7.23 7.9-7.23 4.14 0 7.36 2.95 7.36 6.9 0 4.12-2.6 7.43-6.2 7.43-1.21 0-2.35-.63-2.74-1.37l-.74 2.84a14 14 0 0 1-1.55 3.23A12 12 0 1 0 0 12"></path></svg>
          </div>
          <div className='border-b-2 w-full sm:flex sm:justify-around  hidden h-full sm:items-center '>
            <div className='md:text-mg lg:text-lg text-sm  hover:bg-black hover:rounded-3xl hover:text-white p-2'>Home</div>
            <div className='md:text-mg lg:text-lg text-sm  hover:bg-black hover:rounded-3xl hover:text-white p-2'>Explore</div>
            <div className='md:text-mg lg:text-lg text-sm  hover:bg-black hover:rounded-3xl hover:text-white p-2'>Create</div>
          </div>
        </div>
        {/* logo and toggle btn section end  */}

        <div className='w-1/2 h-[60px] sm:w-1/3 lg:w-1/2 flex justify-center items-center relative'>
          <i className="ri-search-2-line text-xl md-text-2xl  text-slate-400 absolute left-3" style={{ visibility: isInputFocused ? 'hidden' : 'visible' }}></i>
          <input
            type="text"
            name="search"
            placeholder='search'
            id="search"
            className='border-none  bg-gray-300 placeholder:px-9 font-serif text-black   w-full p-4 h-[50px] rounded-3xl focus:outline-none'
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
        </div>

        <div className='w-1/4 h-[60px] '>
          <div className='flex justify-center py-5  sm:hidden'>
            <div id='toglleButton' className='w-9 ml-3'>
              <label className="burger" htmlFor="burger">
                <input onClick={() => { settogglleButton(!istogglleButton) }} type="checkbox" id="burger" />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
          </div>
        </div>

        {/* navbar home  */}
        <div className='w-1/2 absolute right-0 top-16 sm:w-1/4 h-auto p-6 bg-white shadow-2xl rounded-l-xl' style={{ display: istogglleButton ? 'block' : 'none' }}>




          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, culpa similique nesciunt quam deleniti reiciendis, eligendi accusamus voluptatem consequuntur dolore qui blanditiis molestias quaerat laudantium est! Aspernatur saepe soluta placeat?</div>
        </div>


      </div>

      {/* card section */}

      <div className='grid 2xl:grid-cols-3 lg:grid-cols-2 '>

        <ThreeDCardDemo />

        <ThreeDCardDemo />

        <ThreeDCardDemo />

        <SparklesPreview/>


      </div>






    </>
  );
}

export default App;
