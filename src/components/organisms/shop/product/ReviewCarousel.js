"use client"
import React, { useRef, useState, useEffect } from 'react';
import { TextIcon } from '@/components/molecules';
import { Image } from "@/components/atoms"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './reviewCard';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './reviewCarousel.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function ReviewCarousel() {
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
        <>
            <Swiper
                ref={swiperRef}
                slidesPerView={'auto'}
                // centeredSlides={true}
                spaceBetween={15}
                grabCursor={true}
                // pagination={{
                //   clickable: false,
                // }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                onReachEnd={handleReachEnd}
                onReachBeginning={handleReachBeginning}
                modules={[Navigation]}
                className="review relative"
            // loop
            >
                <div className='absolute top-[0] w-full   justify-between lg:flex hidden'>
                    <div className=" text-blackcursor-pointer z-[999999] h-[256px] w-[81.5px] bg-transparent rounded-l-sm flex items-center justify-center">{!isShow && <Image className={'swiper-button-prev rotate-180 cursor-pointer'} src="/shop/right.svg" width={24} alt={'some'} />}</div>
                    <div className=" text-black cursor-pointer z-[999999] h-[256px] w-[81.5px] bg-transparent rounded-l-sm flex items-center justify-center">          {isShow && <Image className={'swiper-button-next cursor-pointer'} src="/shop/right.svg" width={24} alt={'some'} />}</div>
                </div>
                {
                    [0, 1, 2, 3, 4, 5].map(() => (
                        <SwiperSlide>
                            <div className='h-[274px] lg:w-full w-[55px]  border-spacing-[5px] border-black shadow-lg'>
                                <ReviewCard />
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    );
}
