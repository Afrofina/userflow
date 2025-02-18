import React from 'react'
import { Text, Image } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
export default function CardFillPrimary() {
    return (
        <div className='bg-primary p-4 lg:rounded-md rounded-0  flex items-start space-x-4 pr-8 pt-6 pb-12'>
            <Image src={"/wallets/dollarFillPrimary.svg"} width={48} />
            <div className='w-full'>
                <div className='flex items-center justify-between '>
                    <Text align="left" className="text-black sf-pro !tracking-widest !text-[16px] ">
                        Payouts made
                    </Text>
                    <TextIcon iconSrc="/wallets/dropDownFillBlack.svg" text="All time" iconWidth={14} textClass="!text-[10px] text-black sf-pro pr-3" mainClass="flex items-center flex-row-reverse space-x-2 " />

                </div>
                <Text align="left" className="text-black custom-font !tracking-widest !text-[24px] py-3 ">
                    $2500
                </Text>
                <Text align="left" className="text-black sf-pro !tracking-widest !text-[16px] pt-6">
                    Last payout made
                </Text>
                <Text align="left" className="text-black sf-pro !tracking-widest !text-[16px]">
                    $50 to jenny Williams
                </Text>
            </div>
        </div>
    )
}
