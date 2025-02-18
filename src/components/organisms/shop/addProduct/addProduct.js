import React from 'react'
import { Text, Button } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
import {  ProductCard } from "@/components/organisms"
export default function AddProduct({handlePublish,handleAdd}) {
    return (
        <div className='h-full'>
            <div className='grid lg:grid-cols-3 grid-cols-1 px-10 pt-8 h-full gap-8 pb-4'>
                <div className='overflow-auto'>
                    <Text className="text-black !text-[24px] custom-font !tracking-widest pb-4 lg:block hidden" align="left">
                        product
                    </Text>
                    <div className='!h-[250px] w-full block-story flex flex-col justify-center mb-4' onClick={handleAdd}>
                        <TextIcon iconSrc="/shop/addProduct.svg" iconWidth="32" text={<span className='flex'><span className='lg:block hidden pr-1'>Add </span>story</span>} textClass="text-black !text-[24px]" iconClasses="lg:block hidden" mainClass="flex flex-col items-center lg:space-y-3 space-y-0 cursor-pointer" />
                    </div>
                    <ProductCard showCheck={false} showHeart={false}/>
                </div>
                <div className='flex flex-col h-full'>
                    <Text className="text-black !text-[24px] custom-font !tracking-widest pb-4 lg:block hidden" align="center">
                        Stories
                    </Text>
                    <div className='flex-grow rounded-2xl' style={{ backgroundImage: `url('/shop/story.png')`, backgroundSize: 'cover', backgroundPosition: 'center', }}>

                    </div>
                </div>

                <div className='flex flex-col justify-end items-start space-y-4'>
                    <Button className="bg-[#878787] px-6 py-2 rounded text-[18px] font-extralight" onClick={handlePublish}>
                        Publish
                    </Button>
                    <Button className="px-6 py-2 rounded text-[18px] font-extralight border border-black text-black">
                        Discard
                    </Button>
                </div>
            </div>
        </div>
    )
}
