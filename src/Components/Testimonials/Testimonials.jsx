// import React from 'react'
// import Slider from 'react-slick'


// const TestimonialsData = [
//     {
//         id: 1,
//         name:"Victor",
//         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fugiat cupiditate maiores temporibus harum, amet eos, iste optio, nobis suscipit perspiciatis autem voluptatem beatae corporis quis aliquam possimus earum ipsum.",
//    img:"https://picsum.photos/seed/picsum/200/300"  ,
//     },

//     {
//         id: 2,
//         name:"Satya",
//         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fugiat cupiditate maiores temporibus harum, amet eos, iste optio, nobis suscipit perspiciatis autem voluptatem beatae corporis quis aliquam possimus earum ipsum.",
//    img:"https://picsum.photos/100/100"   ,
//     },

//     {
//         id: 3,
//         name:"Virat Vikram",
//         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fugiat cupiditate maiores temporibus harum, amet eos, iste optio, nobis suscipit perspiciatis autem voluptatem beatae corporis quis aliquam possimus earum ipsum.",
//    img:"https://picsum.photos/101/101"  ,
//     },
//     {
//         id: 4,
//         name:"Kachra seth",
//         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fugiat cupiditate maiores temporibus harum, amet eos, iste optio, nobis suscipit perspiciatis autem voluptatem beatae corporis quis aliquam possimus earum ipsum.",
//    img:"https://picsum.photos/102/102"   ,
//     },
//     {
//         id: 5,
//         name:"Lalit burari",
//         text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fugiat cupiditate maiores temporibus harum, amet eos, iste optio, nobis suscipit perspiciatis autem voluptatem beatae corporis quis aliquam possimus earum ipsum.",
//    img:"https://picsum.photos/103/103"   ,
//     },
// ]

// const Testimonials = () => {

//     var settings ={
//         dots: true,
//         arrows:false,
//         Infinite:true,
//         Speed:500,
//         slideToscroll:1,
//         autoplay:true,
//         autoplaySpeed:2000,
//         cssEase:"linear",
//         paspuseOnHover:true,
//         pauseOnFocus:true,
//         responsive:[
//             {
//                 breakpoint:10000,
//                 settings:{
//                     slideToShow:3,
//                     slideToscroll:1,
//                     Infinite:true,
//                 },
//             },
//             {
//                 breakpoint:1024,
//                 settings:{
//                     slideToShow:2,
//                     slideToscroll:1,
//                     initialSlider:2,

//                 }

//             },
//             {
//                 breakpoint:640,
//                 settings:{
//                     slideToShow:1,
//                     slideToscroll:1,
//                 }

//             },
//         ]
//     };
//   return (
//     <div className='py-10 mb-10'>
//         <div className='container'>
//             <div className='text-center mb-10 max-w-[600px] mx-auto'>
//                 <p data-aos="fade-up" className='text-sm text-primary'>What out customars are saying</p>
//                 <h1 data-aos="fade-up" className='text-3xl font-bold'>Testomonials</h1>
//                 <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, officiis pariatur? Cupiditate, dicta eum. Numquam temporibus officia aliquam voluptate error perferendis?</p>
//             </div>
//             <div data-aos="zoom-in">
//                 <Slider {...settings}>{TestimonialsData.map((data) =>(
//                     <div className='my-6'>
//                         <div key={data.id} className='flex flex-col md:flex-row gap-4 md:gap-10 items-center shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative'>
//                         <div className='mb-4'>
//                             <img src={data.img} alt="" className=' rounded-full w-full h-full  md:w-[130px] md:h-[100px] ' />
//                         </div>
//                         <div className=' flex flex-col items-center gap-10  '>
//                             <div className='space-y-3'>
//                                 <p className='text-xs md:text-[17px] dark:text-slate-300 text-gray-500'>{data.text} </p>
//                                 <h1 className='text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light'>{data.name}</h1>
//                             </div>
//                         </div>
//                         <p className=' text-black/20 text-9xl font-serif absolute top-0 right-0'></p>
//                         </div>
//                     </div>
//                 ))}
//                 </Slider>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Testimonials
import React from 'react';
import Slider from 'react-slick';

const TestimonialsData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fugiat cupiditate maiores temporibus harum, amet eos, iste optio, nobis suscipit perspiciatis autem voluptatem beatae corporis quis aliquam possimus earum ipsum.",
        img: "https://picsum.photos/seed/picsum/200/300",
    },
    {
        id: 2,
        name: "Satya",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fugiat cupiditate maiores temporibus harum, amet eos, iste optio, nobis suscipit perspiciatis autem voluptatem beatae corporis quis aliquam possimus earum ipsum.",
        img: "https://picsum.photos/100/100",
    },
    {
        id: 3,
        name: "Virat Vikram",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fugiat cupiditate maiores temporibus harum, amet eos, iste optio, nobis suscipit perspiciatis autem voluptatem beatae corporis quis aliquam possimus earum ipsum.",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 4,
        name: "Kachra Seth",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fugiat cupiditate maiores temporibus harum, amet eos, iste optio, nobis suscipit perspiciatis autem voluptatem beatae corporis quis aliquam possimus earum ipsum.",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 5,
        name: "Lalit Burari",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fugiat cupiditate maiores temporibus harum, amet eos, iste optio, nobis suscipit perspiciatis autem voluptatem beatae corporis quis aliquam possimus earum ipsum.",
        img: "https://picsum.photos/103/103",
    },
];

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='py-10 mb-10'>
            <div className='container'>
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-sm text-primary'>What our customers are saying</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonials</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, officiis pariatur? Cupiditate, dicta eum. Numquam temporibus officia aliquam voluptate error perferendis?</p>
                </div>
                <div data-aos="zoom-in">
                    {/* <Slider {...settings}> */}
                        {TestimonialsData.map((data) => (
                            <div key={data.id} className='my-6'>
                                <div className='flex flex-col md:flex-row gap-4 md:gap-10 items-center shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative'>
                                    <div className='mb-4'>
                                        <img src={data.img} alt="" className='rounded-full w-full h-full md:w-[130px] md:h-[100px]' />
                                    </div>
                                    <div className='flex flex-col items-center gap-10'>
                                        <div className='space-y-3'>
                                            <p className='text-xs md:text-[17px] dark:text-slate-300 text-gray-500'>{data.text}</p>
                                            <h1 className='text-xl font-bold dark:text-slate-300 text-black/80'>{data.name}</h1>
                                        </div>
                                    </div>
                                    <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'></p>
                                </div>
                            </div>
                        ))}
                    {/* </Slider> */}
                </div>
            </div>
        </div>
    );
};

export default Testimonials
