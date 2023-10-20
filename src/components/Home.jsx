import React, { useEffect } from "react";
import { useState } from "react";
import { AnimatePresence, delay, motion, transform } from "framer-motion";
import BackgroundImage1 from '../assets/background_image1.jpg';
import BackgroundImage2 from '../assets/background_image2.jpg';
import BackgroundImage3 from '../assets/background_image3.jpg';
import Testimonials from "./Testimonials";
import Services from "./Services";
import Portfolio from "./Portfolio";
import OurTeam from "./OurTeam";
import ContactUs from "./ContactUs";




const details = [
    { id: 1, heading: 'Trust us to Organize', title: 'Your special day', button: 'Online Request', images: BackgroundImage2 },
    { id: 2, heading: 'The Best Wedding Day', title: "We're getting married!", button: 'Discuss The Wedding', images: BackgroundImage1 },
    { id: 3, heading: 'Flower Arrangements', title: 'See you at the wedding', button: 'View Details', images: BackgroundImage3 }
]
//For heading and button,

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
    },
};
const child = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 30,
            duration: 0.5,

        },
    },
    hidden: {
        opacity: 1,
        y: 500,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,

        },
    },
};
//For Background Animation
const variants = {
    initial: direction => {
        return {
            x: direction > 0 ? 200 : -200,
            opacity: 0
        }
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            x: {
                type: 'spring',
                stiffness: 500,
                damping: 30
            },
            opacity: {
                duration: 0.2
            }
        }

    },
    exit: direction => {
        return {
            x: direction > 0 ? -200 : 200,
            opacity: 0.9,
            transition: {
                x: {
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                },
                opacity: {
                    duration: 0.2,
                }
            }

        }
    },
}



function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const slides = details.length;


    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides - 1 : currentIndex - 1;
        setDirection(-1)
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isNextSlide = currentIndex === slides - 1;
        const nextIndex = isNextSlide ? 0 : currentIndex + 1;
        setDirection(1)
        setCurrentIndex(nextIndex)
    }

    useEffect(() => {
        setCurrentIndex(0)

    }, [])


    return (
        <section className=" w-full h-full bg-gradient-to-r from-gray-900 to-gray-900 " >

            <div className=" w-full h-[900px] sm:h-[400px] md:h-[600px] lg:h-[700px]">
                {details.map((detail, index) => {
                    return (
                        <div key={index}  >
                            {index === currentIndex && (
                                <AnimatePresence initial="false" custom={direction}  >

                                    <motion.div variants={variants} custom={direction} initial="initial" animate="animate" style={{
                                        backgroundImage: `url(${detail.images})`,
                                        backgroundSize: '100% 100%'
                                    }} className=' inset-0 w-full h-[900px] lg:h-[700px] object-cover mix-blend-hard-light  sm:mix-blend-normal sm:h-[400px] md:h-[600px]'>
                                        {/* <motion.img  src={detail.images} alt="image1" className=" w-full h-full object-cover object-center" /> */}


                                        <div className="py-[270px]  flex items-center justify-center lg:hidden sm:hidden md:hidden">
                                            <motion.div variants={container} initial="hidden" animate="visible" className='flex flex-col  items-center justify-center text-white  '>
                                                <motion.span variants={child} className='p-7 uppercase tex-lg font-semibold '>{detail.heading}</motion.span>
                                                <motion.span variants={child} className='p-5 text-8xl italic font-Cormorantupright '>{detail.title}</motion.span>
                                                <motion.button variants={child} className='mt-7  px-7 py-3 bg-white text-black text-sm hover:bg-opacity-80 cursor-pointer sm:px-3 sm:py-2' >{detail.button}</motion.button>
                                            </motion.div>
                                        </div>
                                        <div className=" flex items-center justify-center py-[200px] md:py-[300px]  xl:hidden lg:py-[340px]">
                                            <div className='flex flex-col  items-center justify-center text-white  '>
                                                <span className='p-1 uppercase  font-semibold text-xs md:text-sm lg:text-base'>{detail.heading}</span>
                                                <span className='p-2  italic font-Cormorantupright text-2xl md:text-4xl lg:text-7xl'>{detail.title}</span>
                                                <button className='mt-5  px-2 py-2 bg-white text-black text-xs hover:bg-opacity-80 cursor-pointer ' >{detail.button}</button>
                                            </div>
                                        </div>

                                    </motion.div>
                                </AnimatePresence>)}

                        </div>
                    )
                })}
                <div className="flex items-center justify-center sm:hidden md:hidden">
                    <div className='absolute top-[1010px] lg:top-[800px] text-sm font-PTsans flex flex-row items-center justify-center text-white'>
                        <div className='flex items-center'>01 <div className='w-4 h-[0.1rem] bg-white ml-1 mr-5 hover:w-9 cursor-pointer'></div></div>
                        <div className='flex items-center'>02 <div className='w-4 h-[0.1rem] bg-white ml-1 mr-5 hover:w-9'></div></div>
                        <div className='flex items-center'>03 <div className='w-12 h-[0.1rem] bg-white ml-1 mr-5'></div></div>
                    </div>
                </div>
                <button onClick={prevSlide}
                    className="absolute sm:top-52 md:top-80  top-96 left-1 transform translate-y-[50%] bg-transperent text-white  cursor-pointer text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg></button>
                <button onClick={nextSlide} className="absolute sm:top-52 md:top-80  top-96 right-1 transform translate-y-[50%] bg-transperent  text-white cursor-pointer text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg></button>
            </div>

            <Services className="absolute" />
            <Portfolio />
            <OurTeam />
            <Testimonials />
            <ContactUs />

        </section >
    )


}

export default Home