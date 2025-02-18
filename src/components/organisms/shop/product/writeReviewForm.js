import React from 'react'
import { Text,Image, Button } from '@/components/atoms'
import { TextIcon,LabelInput,LabelTextarea } from '@/components/molecules'
export default function writeReviewForm() {
    return (
        <div className='pt-4 pl-3 lg:pr-12 pr-3 pb-6'>
            <Text className="text-black custom-font !tracking-widest !text-[24px]" align="left">
                Reviews
            </Text>
            <div className='flex items-center space-x-4 pb-4 pt-6'>
                <Text className="text-black !text-[20px] sf-pro" align="left">
                Rate
                </Text>
                <div className='flex items-center'>
                    {[0, 1, 2, 3].map(() => (<Image src={'/shop/product/starOutline.svg'} width={20} />))}
                    <Image src={'/shop/product/starOutline.svg'} width={20} />
                </div>
            </div>
            <div className='pb-6 space-y-4'>
            <LabelInput text='Title' placeholder="What best describes  your experience" textClass="text-black !text-[20px] sf-pro" mainClass="space-y-3" inputClass="border border-[#B9B9B9] focus:outline-none w-full text-[20px] rounded-md px-4 py-3 placeholder-[#B9B9B9] text-[#B9B9B9]"/>
            <LabelTextarea text='Review' type="textarea" rows={4} placeholder="please share your experience here" textClass="text-black !text-[20px] sf-pro" mainClass="space-y-3" inputClass="border border-[#B9B9B9] focus:outline-none w-full text-[20px] rounded-md px-4 py-3 placeholder-[#B9B9B9] text-[#B9B9B9]"/>
            </div>
            <div className='flex justify-end'>
                <Button className="bg-black py-2 px-2 rounded-md text-[20px]">
                Publish Review
                </Button>
            </div>
        </div>
    )
}
