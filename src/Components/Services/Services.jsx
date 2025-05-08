import React from 'react'
import Chawal from "../../assets/polw.jpeg"
// import Chawal1 from "../../assets/Chiken.jpeg"
// import Chawal2 from "../../assets/polw.jpeg"


const ServicesData = [
{
    id:1,
    img: Chawal,
    name: "Biryani",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, repellat."
},
{
    id:2,
    img: Chawal,
    name: "Chiken Biryani",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, repellat."
},
{
    id:3,
    img: Chawal,
    name: "polw Biryani",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, repellat."
},

]

const Services = () => {
  return (
    <>
    <div className='py-10'>
<div className=' container'>
    {/* header section  */}
<div className='text-center mb-20 max-w-[400px] mx-auto'>
<p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Our Services</p>
<h1 className='text-3xl font-bold'>Services</h1>
<p className='text-xs text-gray-400 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Ab architecto libero quae neque quidem, reiciendis facilis labore
     rem quibusdam consequuntur.</p>

</div>
    {/* card section  */}

<div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center '>
        {ServicesData.map(({id,img, name, description}) => {
            return ( <div key={id} className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:text-white duration-300 shadow-xl' >
                <div className='h-[100px]'>
                    <img src={Chawal} alt="" className='max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 ' />
                </div>
                <div className='p-4 text-center'>
                    <h1 className='text-xl font-bold '>{name}</h1>
                    <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{description }</p>
                    </div>
            </div>
           );
        })}
    </div>
</div>
</div>


    </div>
    </>
  )
}

export default Services