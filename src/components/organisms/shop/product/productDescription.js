import React from 'react'
import { TextIcon } from '@/components/molecules'
import { Text } from '@/components/atoms'
import Link from 'next/link'
export default function productDescription() {
    return (
        <div className='p-4 bg-[#FFEF8A] rounded-lg'>
            <div className='!h-[238px]' style={{ backgroundImage: `url('/shop/product/images/product.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

            </div>
            <div className='flex justify-between items-center pt-4 pb-3 border-b border-black'>
                <TextIcon iconSrc="/shop/product/store.svg" text="African Retreat" iconWidth={24} textClass="!text-[16px] text-black custom-font !tracking-widest" mainClass="flex items-center space-x-2  " />
                <TextIcon iconSrc="/shop/product/dot.svg" text="Verified" iconWidth={6} textClass="!text-[14px] text-[#039600] sf-pro " mainClass="flex items-center space-x-2 " />

            </div>

            <div>
                <div className='flex justify-between pb-3 pt-3'>
                    <TextIcon iconSrc="/shop/product/storeBlank.svg" text="Products:    60 " iconWidth={18} textClass="!text-[14px] text-black sf-pro" mainClass="flex items-center space-x-3  " />
                    <TextIcon iconSrc="/shop/product/whatsapp.svg" text="+233 (559)-152-3262" iconWidth={18} textClass="!text-[14px] text-black sf-pro" mainClass="flex items-center space-x-1  " />

                    <TextIcon iconSrc="/shop/product/fb.svg" text="JonathanMajors" iconWidth={18} textClass="!text-[14px] text-black sf-pro" mainClass="flex items-center space-x-3  " />


                </div>
                <div className='flex space-x-5 pb-2'>
                    <TextIcon iconSrc="/shop/product/star.svg" text="Ratings :      4.9 " iconWidth={18} textClass="!text-[14px] text-black sf-pro" mainClass="flex items-center space-x-3  " />
                    <TextIcon iconSrc="/shop/product/insta.svg" text="Products:    60 " iconWidth={18} textClass="!text-[14px] text-black sf-pro" mainClass="flex items-center justify-start space-x-3  " />
                    <div className='flex  pl-16'>
                        <Link href={'/ecom/shop/vendor'}>
                            <Text className="text-black border-b border-black !text-[12px] sf-pro !font-medium" align="right">
                                View Vendor
                            </Text>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
