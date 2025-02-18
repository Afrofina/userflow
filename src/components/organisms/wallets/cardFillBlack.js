import React from 'react'
import { Text, Image } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
export default function CardFillPrimary() {
    return (
        <div className='bg-black p-4 lg:rounded-md rounded-0 flex items-start space-x-4 pr-8 pt-6 pb-12'>
            <Image src={"/wallets/dollarFill.svg"} width={48} />
            <div className='w-full'>
                <div className='flex items-center justify-between '>
                    <Text align="left" className="text-white sf-pro !tracking-widest !text-[16px] ">
                        Total Earnings
                    </Text>
                    <TextIcon iconSrc="/wallets/dropDownFillWhite.svg" text="All time" iconWidth={14} textClass="!text-[10px] text-white sf-pro pr-3" mainClass="flex items-center flex-row-reverse space-x-2 " />

                </div>
                <Text align="left" className="text-white custom-font !tracking-widest !text-[24px] py-3 ">
                    $2500
                </Text>
                <Text align="left" className="text-white sf-pro !tracking-widest !text-[16px] pt-6">
                    Current month earning
                </Text>
                <div className='flex items-center justify-between '>
                    <TextIcon iconSrc="/wallets/progress.svg" text="+5.5%" iconWidth={35} textClass="!text-[16px] text-[#119537] sf-pro pr-3" mainClass="flex items-center space-x-2 " />
                    <Text align="left" className="text-[#2EA250] custom-font !tracking-widest !text-[18px] ">
                        $137
                    </Text>
                </div>
            </div>
        </div>
    )
}
