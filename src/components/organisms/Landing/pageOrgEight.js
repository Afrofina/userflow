import React from 'react'
import { Text, Image } from '@/components/atoms'
import LandingReviewCarousel from './landingReview'
export default function pageOrgEight() {
    return (
        <div className='bg-black py-12 pb-24'>
            <div className='flex lg:flex-row flex-col  items-center justify-between px-12 pb-12'>
                <Text className="!text-primary lg:!text-[72px] !text-[28px] custom-font !tracking-widest lg:w-8/12 w-full" align="left">
                    Here is what people have to say about afrofina
                </Text>
                <Image src={'/landing/pageOrgEight/right.svg'} width={47} />
            </div>
            <div className='relative pl-12'>
                <Image src={'/landing/pageOrgEight/line.svg'} width={1280.5} className={'w-full pt-24 -mb-[180px]'} />
                <div className=''>
                    <LandingReviewCarousel />
                </div>
            </div>
        </div>
    )
}
