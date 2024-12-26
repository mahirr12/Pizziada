import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import MainCategory from './MainCategory';

function MainCarusel() {
    return (
        <main className='lg:h-[100vh] ekoo:h-[100vh]'>

            <div className='bg-[#ccc] h-[70px] text-center py-[15px] sm:ml-[30px] sm:mr-[30px] lg:mt-[30px] lg:flex lg:justify-center lg:gap-[20px]'>
                <h2 className='text-[25px] ekoo:hidden lg:block'><b>Promo kodunuz var?</b> <span className='text-[#F35B53]'><b>Endirimdən istifadə edin!</b></span> </h2>
                <input className='p-[8px] border border-[#0F9675] rounded-md mx-[10px] w-[230px]' type="text" placeholder="Promo kodu daxil edin" />
                <button className=' bg-[#0F9675] border-[0] rounded-md  h-[40px] w-[60px]'>OK</button>
            </div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="ekoo:max-h-[550px] m-[30px]"
            >
                    <SwiperSlide>
                        <img 
                        className='ekoo:hidden lg:block w-full h-full' src="https://www.papajohns.az/images/slider-1.png" alt="" />
                        <img className='lg:hidden w-full h-full' src="https://www.papajohns.az/images/slider-1.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='ekoo:hidden lg:block w-full h-full' src="https://www.papajohns.az/images/slider-2.png" alt="" />
                        <img className='lg:hidden w-full h-full' src="https://www.papajohns.az/images/slider-2.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='ekoo:hidden lg:block w-full h-full' src="https://www.papajohns.az/images/slider-4.png" alt="" />
                        <img className='lg:hidden w-full h-full' src="https://www.papajohns.az/images/slider-4.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='ekoo:hidden lg:block w-full h-full' src="https://www.papajohns.az/images/slider-5.png" alt="" />
                        <img className='lg:hidden w-full h-full' src="https://www.papajohns.az/images/slider-5.png" alt="" />
                    </SwiperSlide>
                   
            </Swiper>
        </main>
    )
}

export default MainCarusel