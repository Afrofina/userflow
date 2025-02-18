"use client"
import React, { useRef, useState, useEffect } from 'react';
import { TextIcon } from '@/components/molecules';
import { Image,Text } from "@/components/atoms"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './landingReviewCarousel.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function LandingReviewCarousel() {
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
                loop
                initialSlide={'lastSlide'}
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
                className="landingReviewCarousel relative"
            // loop
            >
                {
                    [0, 1, 2, 3, 4, 5].map(() => (
                        <SwiperSlide>
                            <div className='lg:h-[347px] h-[234px] bg-primary w-full flex flex-col justify-center items-center  rounded-lg  border-spacing-[5px] border-black shadow-lg'>
                                <Text className="text-black sf-pro lg:!text-[22px] !text-[14px]">
                                “I’m able to earn while i do what i love most (Travel), love the U-cargo agent feature on afrofina.” 
                                </Text>
                                <TextIcon iconSrc="/landing/pageOrgEight/avatar.svg" iconWidth={55.18} iconClass="lg:w-[55.18px]" text="James Appiah" textClass="lg:!text-[22px] !text-[14px] custom-font text-black !tracking-widest" mainClass="flex items-center lg:space-x-6 space-x-3"/>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    );
}
