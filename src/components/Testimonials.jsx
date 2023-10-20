import React from 'react'
import Carousel from './Carousel';


function Testimonials() {
  return (
    <section className=' bg-avocado py-5 w-full h-full sm:pt-10 md:pt-16 lg:pt-20 text-white' id='testimonials'>

      <main className='flex flex-col items-center '>
        {/* <div className='mb-10 h-10 w-[0.125rem]   bg-white opacity-30 sm:hidden md:hidden'></div> */}
        <div className='flex flex-col items-center justify-center gap-4'>
          <span className='uppercase text-lg sm:text-sm md:text-sm lg:text-base font-semibold text-white text-opacity-80'>Testimonials</span>
          <span className='text-6xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-Cormorantupright italic'>Let’s create your wedding</span>
          <p className=' px-72 leading-7 sm:text-xs sm:px-9 sm:text-left sm:tracking-widest md:px-10 md:text-sm lg:text-base lg:px-14 lg:pt-5 font-Lexend text-white text-opacity-60 tracking-wider text-center'>We treat every love story that gets to us in the agency with due attention and sincere care. Organizing a wedding for us is a wonderful journey with you, which brings only joy and pleasure. We take care of all the troubles and difficulties!</p>
        </div>
        <div className=' w-full overflow-hidden py-5 lg:pb-0 sm:pb-1 md:pb-0 '>
          <Carousel />
        </div>
      </main>
      {/* <hr className='mx-24 mt-16  sm:hidden md-hidden' /> */}






    </section>
  )
}

export default Testimonials