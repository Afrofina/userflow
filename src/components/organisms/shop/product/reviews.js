import React from 'react'
import { Text ,Image} from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
import {ReviewCarousel} from '@/components/organisms'
export default function Reviews() {
    return (
        <div className='pl-3 '>
            <div className='flex justify-between pr-16 py-4'>
                <Text className="text-black custom-font !tracking-widest !text-[24px]" align="left">
                    Reviews
                </Text>
                <TextIcon iconSrc="/shop/product/edit.svg" text="Write Review" textClass="text-[#0058FF] !text-[14px] sf-pro" mainClass="flex items-center space-x-2" />
            </div>
            <div className='flex items-center space-x-3 pb-4'>
                <Text className="text-black !text-[14px] sf-pro" align="left">
                    4.7
                </Text>
                <div className='flex items-center'>
                    {[0,1,2,3].map(()=>(<Image src={'/shop/product/starFill.svg'} width={20}/>))}
                    <Image src={'/shop/product/starOutline.svg'} width={20}/>
                </div>
            </div>
            <ReviewCarousel/>
        </div>
    )
}
