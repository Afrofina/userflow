import React from 'react'
import { Button, Text, Image } from '@/components/atoms'
import { LabelInput, TextIcon } from '@/components/molecules'
export default function WithDrawForm({handleClick}) {
    return (
        <div className='relative h-full'>
            <Text align="center" className="text-black custom-font !tracking-widest !text-[24px] lg:block hidden" >
                Withdraw
            </Text>
            <Text align="center" className="text-black sf-pro !text-[14px] pb-8 lg:block hidden">
                Withdraw your earnings
            </Text>
            <LabelInput text="Enter withdrawal amount " inputClass="border border-black w-full px-2 py-3 rounded placeholder-black" placeholder="$" textClass="text-black sf-pro pb-2 !text-[14px]" />
            <Text className='text-black sf-pro !text-[14px] pt-8 pb-4' align="left">
                Withdraw method
            </Text>
            <div className="w-full flex items-center space-x-6 border border-[#0028FB]  px-5 py-5 rounded-md">
                <Image src={'/wallets/checkBlue.svg'} width={20} />
                <TextIcon iconSrc="/wallets/bank.svg" text="Bank Transfer" iconWidth={20} textClass="!text-[18px] text-[#0028FB] sf-pro pr-3" mainClass="flex items-center space-x-4 " />

            </div>
            <div className="w-full flex items-center space-x-6 border border-black  px-5 py-5 rounded-md mt-5">
                <Image src={'/wallets/checkBlack.svg'} width={20} />
                <TextIcon iconSrc="/wallets/usdt.svg" text="USDT" iconWidth={20} textClass="!text-[18px] text-black sf-pro pr-3" mainClass="flex items-center space-x-4 " />

            </div>
            <Button className="w-full bg-black  py-3 !text-[18px] rounded mt-12 font-extralight" onClick={handleClick}>
                Proceed
            </Button>
        </div>
    )
}
