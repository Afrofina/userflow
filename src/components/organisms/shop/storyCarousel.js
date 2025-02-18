"use client"
import React, { useRef, useState, useEffect } from 'react';
import { TextIcon } from '@/components/molecules';
import { Image } from "@/components/atoms"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/navigation'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
export default function App() {
  const [isShow, setShow] = useState(true)
  const swiperRef = useRef(null);
  const router = useRouter()
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
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 'auto',
          },
        }}
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
        className="mySwiper relative"
      // loop
      >
        <div className='absolute top-[0] w-full   justify-between lg:flex hidden'>
          <div className=" text-blackcursor-pointer  h-[256px] w-[81.5px] bg-transparent rounded-l-sm flex items-center justify-center">{!isShow && <Image className={'swiper-button-prev rotate-180 cursor-pointer z-[999999]'} src="/shop/right.svg" width={24} alt={'some'} />}</div>
          <div className=" text-black cursor-pointer z-[999999] h-[256px] w-[81.5px] bg-transparent rounded-l-sm flex items-center justify-center">          {isShow && <Image className={'swiper-button-next cursor-pointer'} src="/shop/right.svg" width={24} alt={'some'} />}</div>
        </div>
        <SwiperSlide>
          <div className='lg:h-[256px] h-[55px] lg:w-full w-[55px] border border-dashed lg:rounded-none rounded-full border-spacing-[5px] border-black shadow-lg flex items-center justify-center' onClick={() => router.push('/ecom/shop/add-story')}>

            <TextIcon onClick={() => router.push('/ecom/shop/add-story')}  iconSrc="/shop/add.svg" text={<span className='flex'><span className='lg:block hidden pr-1'>Add </span>story</span>} textClass="text-black !text-xs" iconClasses="lg:block hidden" mainClass="flex flex-col items-center lg:space-y-3 space-y-0 cursor-pointer w-32" />

            <Image onClick={() => router.push('/ecom/shop/add-story')} src={'/shop/add.svg'} className={'absolute bottom-0 left-0 lg:hidden block'} width={14.5} />
          </div>
        </SwiperSlide>
        <SwiperSlide><div className='lg:h-[256px] h-[55px] lg:w-full w-[55px] bg-gray-100 shadow-lg flex items-end p-2 lg:rounded rounded-full' style={{ backgroundImage: `url('/shop/images/background.svg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <TextIcon iconSrc="/shop/avatar.svg" text="Vanessa" textClass="text-white !text-[12px] !font-medium" iconWidth={36} mainClass="lg:flex hidden items-center space-x-3" />
        </div></SwiperSlide>
        <SwiperSlide><div className='lg:h-[256px] h-[55px] lg:w-full w-[55px] bg-gray-100 shadow-lg flex items-end p-2 lg:rounded rounded-full' style={{ backgroundImage: `url('/shop/images/background.svg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <TextIcon iconSrc="/shop/avatar.svg" text="Vanessa" textClass="text-white !text-[12px] !font-medium" iconWidth={36} mainClass="lg:flex hidden items-center space-x-3" />
        </div></SwiperSlide>
        <SwiperSlide><div className='lg:h-[256px] h-[55px] lg:w-full w-[55px] bg-gray-100 shadow-lg flex items-end p-2 lg:rounded rounded-full' style={{ backgroundImage: `url('/shop/images/background.svg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <TextIcon iconSrc="/shop/avatar.svg" text="Vanessa" textClass="text-white !text-[12px] !font-medium" iconWidth={36} mainClass="lg:flex hidden items-center space-x-3" />
        </div></SwiperSlide>
        <SwiperSlide><div className='lg:h-[256px] h-[55px] lg:w-full w-[55px] bg-gray-100 shadow-lg flex items-end p-2 lg:rounded rounded-full' style={{ backgroundImage: `url('/shop/images/background.svg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <TextIcon iconSrc="/shop/avatar.svg" text="Vanessa" textClass="text-white !text-[12px] !font-medium" iconWidth={36} mainClass="lg:flex hidden items-center space-x-3" />
        </div></SwiperSlide>
        <SwiperSlide><div className='lg:h-[256px] h-[55px] lg:w-full w-[55px] bg-gray-100 shadow-lg flex items-end p-2 lg:rounded rounded-full' style={{ backgroundImage: `url('/shop/images/background.svg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <TextIcon iconSrc="/shop/avatar.svg" text="Vanessa" textClass="text-white !text-[12px] !font-medium" iconWidth={36} mainClass="lg:flex hidden items-center space-x-3" />
        </div></SwiperSlide>
        <SwiperSlide><div className='lg:h-[256px] h-[55px] lg:w-full w-[55px] bg-gray-100 shadow-lg flex items-end p-2 lg:rounded rounded-full' style={{ backgroundImage: `url('/shop/images/background.svg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <TextIcon iconSrc="/shop/avatar.svg" text="Vanessa" textClass="text-white !text-[12px] !font-medium" iconWidth={36} mainClass="lg:flex hidden items-center space-x-3" />
        </div></SwiperSlide>
        <SwiperSlide><div className='lg:h-[256px] h-[55px] lg:w-full w-[55px] bg-gray-100 shadow-lg flex items-end p-2 lg:rounded rounded-full' style={{ backgroundImage: `url('/shop/images/background.svg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <TextIcon iconSrc="/shop/avatar.svg" text="Vanessa" textClass="text-white !text-[12px] !font-medium" iconWidth={36} mainClass="lg:flex hidden items-center space-x-3" />
        </div></SwiperSlide>
        <SwiperSlide><div className='lg:h-[256px] h-[55px] lg:w-full w-[55px] bg-gray-100 shadow-lg flex items-end p-2 lg:rounded rounded-full' style={{ backgroundImage: `url('/shop/images/background.svg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <TextIcon iconSrc="/shop/avatar.svg" text="Vanessa" textClass="text-white !text-[12px] !font-medium" iconWidth={36} mainClass="lg:flex hidden items-center space-x-3" />
        </div></SwiperSlide>
        <SwiperSlide><div className='lg:h-[256px] h-[55px] lg:w-full w-[55px] bg-gray-100 shadow-lg flex items-end p-2 lg:rounded rounded-full' style={{ backgroundImage: `url('/shop/images/background.svg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <TextIcon iconSrc="/shop/avatar.svg" text="Vanessa" textClass="text-white !text-[12px] !font-medium" iconWidth={36} mainClass="lg:flex hidden items-center space-x-3" />
        </div></SwiperSlide>
      </Swiper>
    </>
  );
}
