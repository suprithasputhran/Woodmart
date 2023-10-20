import React from 'react'
import { motion } from 'framer-motion'
import Image1 from '../assets/Image1.jpg'
import Image2 from '../assets/Image2.jpg'
import Image3 from '../assets/Image3.jpg'

const servicesData = [
  { id: 1, serviceImage: Image1, serviceHeader: 'Wedding', serviceSubheader: 'Organization' },
  { id: 2, serviceImage: Image2, serviceHeader: 'Wedding', serviceSubheader: 'Decoration' },
  { id: 3, serviceImage: Image3, serviceHeader: 'Wedding', serviceSubheader: 'Florists' }
]

function Services() {
  return (
    <section className=' pt-48 w-full bg-avocado sm:pt-24 md:pt-28 lg:pt-44'>
      <div className=' w-full flex flex-col items-center justify-center'>
        {/* <div div className=' h-11 w-[0.125rem] bg-avocado opacity-60' ></div > */}
        <div className='pt-9 flex flex-col items-center justify-center'>
          <span className='uppercase text-sm text-bg_primary text-opacity-60 font-semibold sm:text-xs '>Our Services</span>
          <span className=' py-5 text-6xl text-bg_primary font-medium text-opacity-60 font-Cormorantupright italic  sm:text-2xl  md:text-3xl lg:text- 5xl'>Let's create your wedding</span>
          <div className='py-10 w-full flex flex-row gap-9 sm:flex-col sm:items-center md:flex-col md:items-center'>
            {servicesData.map((servicedata, index) => {
              return (

                <div key={index} className="  w-[325px]  h-[500px] lg:w-[200px] lg:h-[300px] sm:w-[225px] sm:h-[350px] md:w-[265px] md:h-[400px] shadow-sm overflow-hidden cursor-pointer" >
                  <motion.div className='relative  w-[325px]  h-[500px] lg:w-[200px] lg:h-[300px] sm:w-[225px] sm:h-[350px] md:w-[265px] md:h-[400px]' whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} >
                    <motion.div className="absolute  w-[325px]  h-[500px] lg:w-[200px] lg:h-[300px] sm:w-[225px] sm:h-[350px] md:w-[265px] md:h-[400px]  bg-black" whileInView={{ opacity: 0.2 }} whileHover={{ scale: 1.1, opacity: 0.6 }} />
                    <img src={servicedata.serviceImage} alt="Organization image" className='w-full h-full  cursor-pointer inset-0 shadow-lg object-cover' />
                  </motion.div>
                  <div className=" -my-72 sm:-my-52 md:-my-60 lg:-my-52 bg-transperent text-white flex flex-col items-center justify-center" >
                    <span className='p-2 font-bold uppercase text-sm sm:text-xs opacity-80'>Wedding</span>
                    <span className='text-4xl sm:text-2xl md:text-3xl font-Cormorantupright italic opacity-90'>{servicedata.serviceSubheader}</span>
                  </div>

                </div>



              )
            })}


            {/* image2 details */}
            {/* <div className="w-[375px]  h-[525px] shadow-sm  overflow-hidden cursor-pointer"  >
            <motion.div className='relative w-[375px]  h-[525px]' whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} >
              <motion.div className="absolute w-[375px]  h-[525px] inset-0 bg-black" whileInView={{ opacity: 0.2 }} whileHover={{ scale: 1.1, opacity: 0.6 }} />
              <img src={Image2} alt="Organization image" className='w-full h-full  cursor-pointer inset-0 shadow-lg object-cover' />
            </motion.div>
            <div className=" -my-72 bg-transperent text-white flex flex-col items-center justify-center" >
              <span className='p-2 font-bold uppercase text-sm opacity-80'>Wedding</span>
              <span className='text-4xl font-Cormorantupright italic opacity-90'>Decoration</span>
            </div>
          </div> */}

            {/* image3 details */}
            {/* <div className="w-[375px]  h-[525px] shadow-sm  overflow-hidden cursor-pointer"  >
            <motion.div className='relative w-[375px]  h-[525px]' whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} >
              <motion.div className="absolute w-[375px]  h-[525px] inset-0 bg-black" whileInView={{ opacity: 0.2 }} whileHover={{ scale: 1.1, opacity: 0.6 }} />
              <img src={Image3} alt="Organization image" className='w-full h-full  cursor-pointer inset-0 shadow-lg object-cover' />
            </motion.div>
            <div className=" -my-72 bg-transperent text-white flex flex-col items-center justify-center" >
              <span className='p-2 font-bold uppercase text-sm opacity-80'>Wedding</span>
              <span className='text-4xl font-Cormorantupright italic opacity-90'>Florists</span>
            </div>
          </div> */}
          </div>
        </div>
        {/* <div className='mt-9 h-11 w-[0.125rem] bg-avocado opacity-60 sm:hidden'></div> */}
      </div >
    </section >
  )
}

export default Services