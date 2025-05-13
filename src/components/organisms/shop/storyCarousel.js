"use client";
import React, { useRef, useState, useEffect } from "react";
import { TextIcon } from "@/components/molecules";
import { Image } from "@/components/atoms";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
export default function App() {
  const [isShow, setShow] = useState(true);
  const swiperRef = useRef(null);
  const router = useRouter();
  const handleReachEnd = () => {
    console.log("Last slide reached");
    setShow(false);
    // Perform any action when the last slide is reached
  };
  const handleReachBeginning = () => {
    console.log("First slide reached");
    setShow(true);
    // Perform any action when the first slide is reached
  };

  const [storyIndex, setStoryIndex] = useState(null); // null = modal closed

  const closeStory = () => setStoryIndex(null);

  const nextStory = () => {
    if (storyIndex !== null && storyIndex < slides.length - 1) {
      setStoryIndex(storyIndex + 1);
    }
  };

  const prevStory = () => {
    if (storyIndex !== null && storyIndex > 0) {
      setStoryIndex(storyIndex - 1);
    }
  };

  // Dummy array for rendering (replace with actual story data)
  const slides = new Array(10).fill({
    avatar: "/shop/avatar.svg",
    name: "Vanessa",
    background: "/shop/images/background.svg",
  });

  useEffect(() => {
    if (storyIndex !== null) {
      const timer = setTimeout(() => {
        nextStory();
      }, 5000); // 5 seconds
      return () => clearTimeout(timer);
    }
  }, [storyIndex]);

  return (
    <>
      <Swiper
        ref={swiperRef}
        slidesPerView={"auto"}
        // centeredSlides={true}
        spaceBetween={15}
        grabCursor={true}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: "auto",
          },
        }}
        // pagination={{
        //   clickable: false,
        // }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onReachEnd={handleReachEnd}
        onReachBeginning={handleReachBeginning}
        modules={[Navigation]}
        className="mySwiper relative"
        // loop
      >
        <div className="absolute top-[0] w-full   justify-between lg:flex hidden">
          <div className=" text-blackcursor-pointer  h-[256px] w-[81.5px] bg-transparent rounded-l-sm flex items-center justify-center">
            {!isShow && (
              <Image
                className={
                  "swiper-button-prev rotate-180 cursor-pointer z-[999999]"
                }
                src="/shop/right.svg"
                width={24}
                alt={"some"}
              />
            )}
          </div>
          <div className=" text-black cursor-pointer z-[999999] h-[256px] w-[81.5px] bg-transparent rounded-l-sm flex items-center justify-center">
            {" "}
            {isShow && (
              <Image
                className={"swiper-button-next cursor-pointer"}
                src="/shop/right.svg"
                width={24}
                alt={"some"}
              />
            )}
          </div>
        </div>
        <SwiperSlide>
          <div
            className="lg:h-[256px] h-[55px] lg:w-full w-[55px] border border-dashed lg:rounded-none rounded-full border-spacing-[5px] border-black shadow-lg flex items-center justify-center"
            onClick={() => router.push("/ecom/shop/add-story")}
          >
            <TextIcon
              onClick={() => router.push("/ecom/shop/add-story")}
              iconSrc="/shop/add.svg"
              text={
                <span className="flex">
                  <span className="lg:block hidden pr-1">Add </span>story
                </span>
              }
              textClass="text-black !text-xs"
              iconClasses="lg:block hidden"
              mainClass="flex flex-col items-center lg:space-y-3 space-y-0 cursor-pointer w-32"
            />

            <Image
              onClick={() => router.push("/ecom/shop/add-story")}
              src={"/shop/add.svg"}
              className={"absolute bottom-0 left-0 lg:hidden block"}
              width={14.5}
            />
          </div>
        </SwiperSlide>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => setStoryIndex(index)}
              className="lg:h-[256px] h-[55px] lg:w-full w-[55px] bg-gray-100 shadow-lg flex items-end p-2 lg:rounded rounded-full"
              style={{
                backgroundImage: `url('${slide.background}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <TextIcon
                iconSrc={slide.avatar}
                text={slide.name}
                textClass="text-white !text-[12px] !font-medium"
                iconWidth={36}
                mainClass="lg:flex hidden items-center space-x-3"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <div
            className="lg:h-[256px] h-[55px] lg:w-full w-[55px] bg-gray-100 shadow-lg flex items-end p-2 lg:rounded rounded-full"
            style={{
              backgroundImage: `url('/shop/images/background.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <TextIcon
              iconSrc="/shop/avatar.svg"
              text="Vanessa"
              textClass="text-white !text-[12px] !font-medium"
              iconWidth={36}
              mainClass="lg:flex hidden items-center space-x-3"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="lg:h-[256px] h-[55px] lg:w-full w-[55px] bg-gray-100 shadow-lg flex items-end p-2 lg:rounded rounded-full"
            style={{
              backgroundImage: `url('/shop/images/background.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <TextIcon
              iconSrc="/shop/avatar.svg"
              text="Vanessa"
              textClass="text-white !text-[12px] !font-medium"
              iconWidth={36}
              mainClass="lg:flex hidden items-center space-x-3"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="lg:h-[256px] h-[55px] lg:w-full w-[55px] bg-gray-100 shadow-lg flex items-end p-2 lg:rounded rounded-full"
            style={{
              backgroundImage: `url('/shop/images/background.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <TextIcon
              iconSrc="/shop/avatar.svg"
              text="Vanessa"
              textClass="text-white !text-[12px] !font-medium"
              iconWidth={36}
              mainClass="lg:flex hidden items-center space-x-3"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="lg:h-[256px] h-[55px] lg:w-full w-[55px] bg-gray-100 shadow-lg flex items-end p-2 lg:rounded rounded-full"
            style={{
              backgroundImage: `url('/shop/images/background.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <TextIcon
              iconSrc="/shop/avatar.svg"
              text="Vanessa"
              textClass="text-white !text-[12px] !font-medium"
              iconWidth={36}
              mainClass="lg:flex hidden items-center space-x-3"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="lg:h-[256px] h-[55px] lg:w-full w-[55px] bg-gray-100 shadow-lg flex items-end p-2 lg:rounded rounded-full"
            style={{
              backgroundImage: `url('/shop/images/background.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <TextIcon
              iconSrc="/shop/avatar.svg"
              text="Vanessa"
              textClass="text-white !text-[12px] !font-medium"
              iconWidth={36}
              mainClass="lg:flex hidden items-center space-x-3"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="lg:h-[256px] h-[55px] lg:w-full w-[55px] bg-gray-100 shadow-lg flex items-end p-2 lg:rounded rounded-full"
            style={{
              backgroundImage: `url('/shop/images/background.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <TextIcon
              iconSrc="/shop/avatar.svg"
              text="Vanessa"
              textClass="text-white !text-[12px] !font-medium"
              iconWidth={36}
              mainClass="lg:flex hidden items-center space-x-3"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="lg:h-[256px] h-[55px] lg:w-full w-[55px] bg-gray-100 shadow-lg flex items-end p-2 lg:rounded rounded-full"
            style={{
              backgroundImage: `url('/shop/images/background.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <TextIcon
              iconSrc="/shop/avatar.svg"
              text="Vanessa"
              textClass="text-white !text-[12px] !font-medium"
              iconWidth={36}
              mainClass="lg:flex hidden items-center space-x-3"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="lg:h-[256px] h-[55px] lg:w-full w-[55px] bg-gray-100 shadow-lg flex items-end p-2 lg:rounded rounded-full"
            style={{
              backgroundImage: `url('/shop/images/background.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <TextIcon
              iconSrc="/shop/avatar.svg"
              text="Vanessa"
              textClass="text-white !text-[12px] !font-medium"
              iconWidth={36}
              mainClass="lg:flex hidden items-center space-x-3"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="lg:h-[256px] h-[55px] lg:w-full w-[55px] bg-gray-100 shadow-lg flex items-end p-2 lg:rounded rounded-full"
            style={{
              backgroundImage: `url('/shop/images/background.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <TextIcon
              iconSrc="/shop/avatar.svg"
              text="Vanessa"
              textClass="text-white !text-[12px] !font-medium"
              iconWidth={36}
              mainClass="lg:flex hidden items-center space-x-3"
            />
          </div>
        </SwiperSlide> */}
      </Swiper>

      {/* expand story */}

      {storyIndex !== null && (
        <div className="fixed inset-0 z-[99999] bg-black bg-opacity-90 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeStory}
            className="z-50 items-center rounded-full bg-primary px-2 absolute top-4 right-4 text-black text-3xl font-bold"
          >
            ×
          </button>

          {/* Story Slider (3 in view) */}
          <div className="flex items-center gap-4 px-8">
            {/* Previous story */}
            {storyIndex > 0 && (
              <div className="hidden md:block relative w-[300px] opacity-50 transition-opacity duration-300">
                <img
                  src={slides[storyIndex - 1].background}
                  alt="Previous story"
                  className="rounded-xl object-cover w-full"
                />
                {/* Avatar + name */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <img
                    src={slides[storyIndex - 1].avatar}
                    className="w-8 h-8 rounded-full"
                    alt="avatar"
                  />
                  <span className="text-white">
                    {slides[storyIndex - 1].name}
                  </span>
                </div>
              </div>
            )}

            {/* Current (active) story */}
            <div className="relative w-[320px] md:w-[360px] scale-105 transition-transform duration-300">
              <img
                src={slides[storyIndex].background}
                alt="Active story"
                className="rounded-xl object-cover w-full"
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <img
                  src={slides[storyIndex].avatar}
                  className="w-8 h-8 rounded-full"
                  alt="avatar"
                />
                <span className="text-white">{slides[storyIndex].name}</span>
              </div>
              <button className="absolute bottom-3 right-3 bg-white text-black px-3 py-1 rounded-md text-sm">
                View Product
              </button>
            </div>

            {/* Next story */}
            {storyIndex < slides.length - 1 && (
              <div className="hidden md:block relative w-[300px] opacity-50 transition-opacity duration-300">
                <img
                  src={slides[storyIndex + 1].background}
                  alt="Next story"
                  className="rounded-xl object-cover w-full"
                />
                {/* Avatar + name */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <img
                    src={slides[storyIndex + 1].avatar}
                    className="w-8 h-8 rounded-full"
                    alt="avatar"
                  />
                  <span className="text-white">
                    {slides[storyIndex + 1].name}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Arrows */}
          {storyIndex > 0 && (
            // <button
            //   onClick={prevStory}
            //   className="absolute left-8 text-white text-4xl font-bold"
            // >
            //   ‹
            // </button>
            <Image
              onClick={prevStory}
              src={"/shop/story/previous.svg"}
              width={30}
              className="absolute left-6 text-white text-4xl font-bold"
            />
          )}
          {storyIndex < slides.length - 1 && (
            // <button
            //   onClick={nextStory}
            //   className="absolute right-8 text-white text-4xl font-bold"
            // >
            //   ›
            // </button>
            <Image
              onClick={nextStory}
              src={"/shop/story/next.svg"}
              width={30}
              className="absolute right-6 text-white text-4xl font-bold"
            />
          )}
        </div>
      )}
    </>
  );
}
