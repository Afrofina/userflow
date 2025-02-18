"use client"
import React, { useRef, useState, useEffect } from 'react';
import { TextIcon } from '@/components/molecules';
import { Button, Image } from "@/components/atoms"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from '../product/reviewCard';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './storyCarousel.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function ReviewCarousel() {
    const [isShow, setShow] = useState(true)
    const [activeIndex, setActiveIndex] = useState(0);
    const swiper = useRef(null);
    // const handleReachEnd = () => {
    //     console.log('Last slide reached');
    //     setShow(false)
    //     // Perform any action when the last slide is reached
    // };
    // const handleReachBeginning = () => {
    //     console.log('First slide reached');
    //     setShow(true)
    //     // Perform any action when the first slide is reached
    // };
    useEffect(() => {
        if (swiper.current) {
            swiper.current.swiper.on('slideChange', () => {
                console.log('swiper.current.swiper.realIndex', swiper.current.swiper.realIndex)
                setActiveIndex(swiper.current.swiper.realIndex);
            });
        }
    }, []);

    return (
        <>
            <Swiper
                loop
                slidesPerView={1}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                }}
                spaceBetween={15}
                grabCursor={true}
                // onReachEnd={handleReachEnd}
                // onReachBeginning={handleReachBeginning}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                modules={[Navigation]}
                className="story relative h-full"
                ref={swiper}
            // loop
            >
                <div className='absolute top-[0] w-full h-full items-center   justify-between flex'>
                    <div className=" text-blackcursor-pointer z-[999999] h-[256px] w-[81.5px] bg-transparent rounded-l-sm flex items-center justify-center"> <Image className={'swiper-button-prev rotate-180 cursor-pointer'} src="/shop/right.svg" width={24} alt={'some'} /></div>
                    <div className=" text-black cursor-pointer z-[999999] h-[256px] w-[81.5px] bg-transparent rounded-l-sm flex items-center justify-center">       <Image className={'swiper-button-next cursor-pointer'} src="/shop/right.svg" width={24} alt={'some'} /></div>
                </div>
                {
                    [0, 1, 2, 3, 4, 5,6,7,8].map((val, index) => (
                        <SwiperSlide>
                            <div className={`slide-label h-full flex justify-center items-end lg:rounded-xl rounded-none overflow-hidden relative ${activeIndex + 1 === index ? 'active' : ''}`} style={{ backgroundImage: `url('/shop/story.png')`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                                {/* <div className=""> */}
                                <video
                                    className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
                                    autoPlay
                                    loop={activeIndex + 1 === index?true:false}
                                    muted
                                >
                                    <source src="/video.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="relative z-10 pb-3 rounded-lg w-full flex justify-between items-center lg:px-0 px-4">
                                    <TextIcon iconSrc="/shop/avatar.svg" text="Vanessa" textClass="text-white !text-[24px] !font-medium sf-pro" iconWidth={69} iconClass='lg:w-[69px] w-[61px] ' mainClass="flex   items-center space-x-3 " />
                                    <Button className="text-[18px] text-black sf-pro bg-white py-1">
                                    View Product
                                    </Button>
                                </div>
                                {/* </div> */}
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    );
}
