import React from 'react'
import { Text,Button } from '@/components/atoms'
import { TextIcon, Counter, LabelInput } from '@/components/molecules'
import Link from 'next/link'
export default function ProductInfo() {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <Text className="custom-font text-black !tracking-widest !text-[24px]">
                    Premuim African wear
                </Text>
                <Text className="custom-font text-black !tracking-widest !text-[24px]">
                    $80
                </Text>
            </div>
            <Text align="left sf-pro !text-[16px] !font-regular py-4 pt-8">
                Orange Reversible African Print Maxi Wrap Skirt. African Skirt. Multi Color Skirt. Wrap Skirt. Cotton Women African Fashion. Full length.
            </Text>
            <div className='flex space-x-3 items-center py-6'>
                <TextIcon iconSrc="/shop/product/flag.svg" text="From Ghana" textClass="!text-[14px] text-black" iconWidth={17} mainClass="flex items-center space-x-2" />
                <TextIcon iconSrc="/shop/product/ship.svg" text="U-cargo Available" textClass="!text-[14px] text-[#63257B]" iconWidth={17} mainClass="flex items-center space-x-2 bg-[#DFD0E5] px-2 py-0.5 rounded" />
            </div>
            <div className='flex lg:space-x-3 space-x-1 items-center py-6'>

                <TextIcon iconSrc="/shop/product/store.svg" text="Wholesale" textClass="!text-[14px] text-black" iconWidth={17} mainClass="flex items-center space-x-2 bg-[#FFEF8A] border border-[#FFEF8A] px-2 py-0.5 rounded" />
                <TextIcon iconSrc="/shop/product/bag.svg" text="Retail" textClass="!text-[14px] text-black" iconWidth={17} mainClass="flex items-center space-x-2 border border-black px-2 py-0.5 rounded" />
                <div className='lg:pl-5 pl-0'>
                    <Counter />
                </div>
            </div>
            <div className='flex items-center lg:space-x-3 space-x-1 pt-8'>
                <div className='bg-[#FFEF8A] py-1 px-2 border border-[#FFEF8A] space-y-1'>
                    <Text className="custom-font text-black !tracking-widest !text-[14px]">
                        100 Pieces
                    </Text>
                    <Text className="sf-pro text-black !tracking-widest !text-[14px]">
                        $10.50 each
                    </Text>
                </div>
                <div className='border border-[#969696] py-1 px-2 rounded  space-y-1'>
                    <Text className="custom-font text-[#969696] !tracking-widest !text-[14px]">
                        100 Pieces
                    </Text>
                    <Text className="sf-pro text-black !tracking-widest !text-[14px]">
                        $10.50 each
                    </Text>
                </div>
                <div className='border border-[#969696] py-1 px-2 rounded  space-y-1'>
                    <Text className="custom-font text-[#969696] !tracking-widest !text-[14px]">
                        100 Pieces
                    </Text>
                    <Text className="sf-pro text-black !tracking-widest !text-[14px]">
                        $10.50 each
                    </Text>
                </div>
            </div>
            <LabelInput type="checkbox" text="Buying as a gift" mainClass="flex flex-row-reverse items-center justify-end py-6" inputClass="w-6 mr-4" textClass="!text-black !text-[14px]" />
            <Link href={'/ecom/shop/cart'}>
            <Button className="bg-primary w-full flex justify-center py-1 rounded">
                <TextIcon iconSrc="/header/cart.svg" text="Add to cart " textClass="text-black !text-[18px]" iconWidth={20} mainClass="flex items-center space-x-2 items-center" />

            </Button>
            </Link>
        </div>
    )
}
