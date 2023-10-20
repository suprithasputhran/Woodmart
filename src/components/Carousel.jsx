import React, { useCallback, useState } from 'react'
import Image1 from '../assets/background_image1.jpg';
import Image2 from '../assets/background_image2.jpg';
import Image3 from '../assets/background_image3.jpeg';
import Image4 from '../assets/background_image3.jpg';
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton';

useEmblaCarousel.globalOptions = { loop: true }

const customerData = [
    {
        id: 1, customerfeedback: 'Praesent dis torquent a ad tincidunt nec vivamus enim hac eleifend phasellus adipiscing vestibulum vestibulum euismod hendreit.',
        type: 'Happy customer', customerName: 'Wendy Pena', customerImage: Image1
    },
    {
        id: 2, customerfeedback: 'Dignissim quam sem etiam luctus a a elit enim cum congue a adipiscing a per vestibulum a a feugiat in venenaties risus vel donec.',
        type: 'Happy customer', customerName: 'Brandie Russell', customerImage: Image2
    },
    {
        id: 3, customerfeedback: 'Suspendisse parturient imperdiet metus aenean suspendisse arc proin gravida faucibus mangna massa nec a dignissim malesuada.',
        type: 'Happy customer', customerName: 'Emma Norton', customerImage: Image3
    },
    {
        id: 4, customerfeedback: 'Sociable on as carriage my position weddings raillery consider. Peculiar trifling absolute and wandered vicinity property yet.',
        type: 'Happy customer', customerName: 'Norman Clifton', customerImage: Image4
    }
]

function Carousel() {


    const [emblaRef, emblaApi] = useEmblaCarousel()
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)


    const scrollPrev = useCallback(() => {
        emblaApi?.scrollPrev();



    }, [emblaApi])

    const scrollNext = useCallback(() => {
        emblaApi?.scrollNext()

    }, [emblaApi])



    return (

        <div className='py-5 flex items-center group w-full text-white bg-avocado'>
            <div
                className='w-[6%] sm:w-[15%] md:w-[12%] lg:w-[20%] flex items-center justify-end '>
                <button onClick={scrollPrev} className='  group-hover:block text-white  transform -translate-x-16 transition-all ease-in duration-500 opacity-0 group-hover:opacity-100  group-hover:translate-x-0 '
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </button>
            </div>
            <div className='w-[88%] sm:w-[70%] md:w-[74%] lg:w-[60%] flex flex-col overflow-hidden items-center '>
                <div ref={emblaRef} className=' my-5 w-full  flex  '>

                    <div className=' flex flex-row items-center  gap-4  w-full '>
                        {customerData.map((cusData, index) => {
                            return (
                                <div key={index} className='py-2 flex flex-col items-center min-w-[24rem] sm:min-w-[16rem] md:min-w-[18rem]   lg:min-w-[28rem]  min-h-80  justify-center gap-10'>
                                    <img src={cusData.customerImage} alt={index} className='w-24 h-24 sm:w-14 sm:h-14 md:h-20 md:w-20 rounded-full' />
                                    <p className='text-center font-Lexend  font-thin text-white text-opacity-80 lg:text-lg sm:text-sm'>{cusData.customerfeedback}</p>
                                    <span className=' font-Lexend font-semibold sm:text-sm'>{cusData.customerName} - {cusData.type}</span>
                                </div>
                            )
                        })}
                    </div>


                </div>

                <div className='flex gap-3' >
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={`w-3 h-3 rounded-full border-2 ${index === selectedIndex ? "bg-white" : "bg-transperent "
                                }`}
                        />
                    ))}
                </div>



            </div>
            <div className='w-[6%]  flex items-center justify-start '>
                <button onClick={scrollNext} className='transform translate-x-20 transition-all ease-in duration-500 opacity-0 group-hover:opacity-100  group-hover:translate-x-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
            </div>


        </div>

    )
}
export default Carousel