"use client"

import React from 'react'

import dynamic from 'next/dynamic';

const Carousel = dynamic(() => import('react-material-ui-carousel').then(mod => mod.default), {
  ssr: false // This line is important to prevent server-side rendering errors
});

export default function CarouselAtom(props) {
    const {
        children
    } = props
    return (
        <Carousel
            navButtonsAlwaysInvisible={true}
            indicatorContainerProps={{ className: 'absolute  h-full top-0 flex flex-col justify-center items-end pr-8 ' }} indicatorIconButtonProps={{ className: 'z-[99999]', style: { color: 'gray !important' } }}
            activeIndicatorIconButtonProps={{ style: { color: '#FFD019 !important' } }}>
            {children}
        </Carousel>
    )
}
