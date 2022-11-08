import React ,{useState}from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Autoplay } from 'swiper';
import image from '../../images/new.JPG'
// import { Link } from 'react-router-dom';

export default function CardSlider() {
  const [Active,setActive] = useState(null);
  const details = [
    {
    src:image,
    name:"Saqib",
    disc:"professinol web developer in react and react-native",
  },
    {
    src:image,
    name:"Ahmer",
    disc:"professinol web developer in react and react-native",
  },
    {
    src:image,
    name:"Arsalan",
    disc:"professinol web developer in react and react-native",
  },
]
  return (<>    
  <h1 className=' text-black ml-20 text-5xl font-bold'>Teacher's Details</h1>
    <div className="h-screen text-black flex bg-gradient-to-b from-slate-300 to-slate-100 bg-gradient-to-t from-slate-300 items-center justify-center">
  {/* <Link  className='text-black '> View details</Link> */}
    <div className='max-w-5xl'>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={(cur) => setActive(cur.realIndex)}
      onSwiper={(swiper) => console.log()}
      loop={true}
      centeredSlides={true}
      speed={800}
      autoplay={{
        delay:900
      }}
      modules={[Autoplay]}
    >


    {
      details.map((data,i)=>(
        
        <SwiperSlide key={i}>
        <div className='h-96 flex'>
          <div className={`card ${Active === i && "card-active"} to-slate-300`}>
          <div  className=''>
            <img  src={data.src} alt="" />
          </div>
            <h1 className='text-3xl mt-2 font-serif'>{data.name}</h1>
            <p className='mt-2'>{data.disc}</p>
          </div>
        </div>
      </SwiperSlide>

      ))
      
    }
     
    
    
    </Swiper>
 
    </div>
  </div>
  </>
)
}
