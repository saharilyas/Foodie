import React, { useEffect } from 'react'
import Food1 from "../../assets/Biryani.jpg"
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }) // AOS کو انیشیئلائز کریں
      }, [])
  return (
  <>   
   <div className='min-h-[550px] py-20'>
    <div>
         <div data-aos="slide-up"
         data-aos-duration="300"
         className='container'>
     <div className='flex flex-col md:flex-row gap-x-10 md:gap-x-20 justify-center items-center '>
        {/* image section  */}
        <div className='w-1/2'>
            <img src={Food1} alt="" className='max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_ rgba(0,0,0,0.1)]' />
        </div>
        {/* text-content section  */}
        <div className='flex  flex-col justify-center gap-6  sm:pt-0 w-1/2'>
            <h1 className='text-3xl sm:text-4xl font-bold'>lorem ipsum dolor  </h1>
            <p className='text-sm  text-gray-500 tracking-wide leading-5'>Lorem ipsum dolor sit amet consectetur,  adipisicing elit.<br/>
                 Asperiores qui ad quisquam quas odio? Cumque sapiente <br/> expedita esse minus libero aliquam, 
                 vero incidunt, sit amet<br/> consectetur, adipisicing elit. Asperiores qui ad quisquam quas<br/> odio? Cumque
                  sapiente expedita esse mh libero aliquam, vero<br/> incidunt, distinctio at quis culpa quia animi reiciendis.</p>
            <div className='flex gap-6 '>
                <div>
                    <GrSecure className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-200 dark:bg-violet-400' />
                </div>
                <div>
                    <IoFastFood className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400' />
                </div>
                <div>
                    <GiFoodTruck className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400' />
                </div>
            </div>
            <div>
                <button className='bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 duration-200 '>Order Now </button>
            </div>
        </div>
     </div>
    </div>
    </div> 
    </div>
    </>
  )
}

export default Banner