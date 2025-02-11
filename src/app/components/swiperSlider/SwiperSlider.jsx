"use client"; // If using Next.js App Router

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import sliderImg1 from "../../assets/slider-img-1.webp";
import sliderImg2 from "../../assets/slider-img-2.webp";
import sliderImg3 from "../../assets/slider-img-3.webp";
import sliderImg4 from "../../assets/slider-img-4.webp";
import sliderImg5 from "../../assets/slider-img-5.webp";
import sliderImg6 from "../../assets/slider-img-6.webp";
import sliderImg7 from "../../assets/slider-img-7.webp";
import sliderImg8 from "../../assets/slider-img-8.webp";
import sliderImg9 from "../../assets/slider-img-9.webp";
import sliderImg10 from "../../assets/slider-img-10.webp";
import sliderImg11 from "../../assets/slider-img-11.webp";
import sliderImg12 from "../../assets/slider-img-12.webp";
import sliderImg13 from "../../assets/slider-img-13.webp";
import sliderImg14 from "../../assets/slider-img-14.webp";
import Image from 'next/image';

const SwiperSlider = () => {
  const carImages = [
    { image: sliderImg1, name: "Lamborghini",year:"2022",model:"Huracan EVO Coupe " },
    { image: sliderImg2, name: "Audi",year:"2020",model:"R8 5.2 Quattro V10 2D Coupe" },
    { image: sliderImg3, name: "Farrari",year:"2008",model:"F430" },
    { image: sliderImg4, name: "Aston Martin",year:"2013",model:"V12 Zagato - 1 of 18 RHD Spec " },
    { image: sliderImg5, name: "Brabus KTM",year:"2022",model:"1300r"  },
    { image: sliderImg6, name: "BMW",year:"2022",model:"M850i xDrive Gran Coupe, The 8 X Jeff Koons, 1 of 99"  },
    { image: sliderImg7, name: "Porsche",year:"2023",model:"911 Carrera T"  },
    { image: sliderImg8, name: "Porsche",year:"2024",model:"911 (992) GT3 RS 'Weissach'"  },
    { image: sliderImg9, name: "Land Lover",year:"1994",model:`Defender 90 300Tdi "Brooklyn Coachworks"`  },
    { image: sliderImg10,name: "Mercedes-Benz",year:"2012",model:"SLS AMG Gullwing" },
    { image: sliderImg11,name: "Mclaren",year:"2022",model:"720s Spider" },
    { image: sliderImg12,name: "Range Rover",year:"2021",model:"SV Autobiography LWB" },
    { image: sliderImg13, name: "Lamborghini",year:"2010",model:"Gallardo LP560-4 - VF Engineering Supercharged"  },
    { image: sliderImg14, name: "Aston Martin",year:"2021",model:"DB5 Continuation Goldfinger Ed." },
  ];

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {carImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div style={{ position: 'relative', height: '500px' }}>
              <Image
                src={item.image}
                alt={`Slide ${index + 1}`}
                fill // Use `fill` to make the image cover the container
                style={{ objectFit: 'cover' }}
              />
              <div className="car-details" style={{position: 'absolute',}}>
              <span className='car-year'>
                {item.year}
              </span>
              <h2 className='car-name'>
                {item.name}
              </h2>
              <span className='car-model'>
                {item.model}
              </span>
              </div>
            </div>
            <button className='bid-now-btn'>
                Bid Now
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperSlider;