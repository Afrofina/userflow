
"use client"
import React, { useRef, useState, useEffect } from 'react';
import { TextIcon } from '@/components/molecules';
import { Image, Text } from "@/components/atoms"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import './labelCarousel.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
export default function LabelsCarousel({ data, selected, handleClick }) {
    const [isShow, setShow] = useState(true)
    const swiperRef = useRef(null);

    const handleReachEnd = () => {
        console.log('Last slide reached');
        setShow(false)
        // Perform any action when the last slide is reached
    };
    const handleReachBeginning = () => {
        console.log('First slide reached');
        setShow(true)
        // Perform any action when the first slide is reached
    };
    return (
        <div className='grid grid-cols-4 gap-4'>
            <div className='!h-[369px] '>
                <Swiper
                    slidesPerView={4}
                    direction='vertical'
                    // centeredSlides={true}
                    spaceBetween={10}
                    grabCursor={true}
                    onReachEnd={handleReachEnd}
                    onReachBeginning={handleReachBeginning}
                    modules={[Navigation]}
                    className="!h-[459px] relative"
                    loop
                >
                    <SwiperSlide className=''>
                        <div className='w-full rounded !h-[105.5px]' style={{ backgroundImage: `url('/shop/product/images/p1.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='w-full rounded !h-[105.5px]' style={{ backgroundImage: `url('/shop/product/images/p2.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='w-full rounded !h-[105.5px]' style={{ backgroundImage: `url('/shop/product/images/p3.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide className=''>
                        <div className='w-full rounded !h-[105.5px]' style={{ backgroundImage: `url('/shop/product/images/p4.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='w-full rounded !h-[105.5px]' style={{ backgroundImage: `url('/shop/product/images/p1.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='w-full rounded !h-[105.5px]' style={{ backgroundImage: `url('/shop/product/images/p2.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='col-span-3'>
                <Swiper
                    // centeredSlides={true}
                    spaceBetween={10}
                    grabCursor={true}
                    onReachEnd={handleReachEnd}
                    onReachBeginning={handleReachBeginning}
                    modules={[Navigation]}
                    className="!h-[459px] relative"
                    loop
                >
                    <SwiperSlide className=''>
                        <div className='w-full rounded !h-[459px]' style={{ backgroundImage: `url('/shop/product/images/p1.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='w-full rounded !h-[459px]' style={{ backgroundImage: `url('/shop/product/images/p2.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='w-full rounded !h-[459px]' style={{ backgroundImage: `url('/shop/product/images/p3.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide className=''>
                        <div className='w-full rounded !h-[459px]' style={{ backgroundImage: `url('/shop/product/images/p4.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='w-full rounded !h-[459px]' style={{ backgroundImage: `url('/shop/product/images/p1.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='w-full rounded !h-[459px]' style={{ backgroundImage: `url('/shop/product/images/p2.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
