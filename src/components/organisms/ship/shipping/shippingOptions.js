import React from 'react'
import { Text, Button } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
import { ShippingCard } from '../..'
export default function shippingOptions() {
    return (
        <div>
            <Text className="!text-[20px] text-black custom-font !tracking-widest py-4 lg:block hidden" align="center">
                Your delivery Options
            </Text>
            <div className='flex justify-between items-start lg:px-10 px-4 lg:pt-0 pt-5'>
                <div className='border border-[#646464] rounded px-4 py-2 bg-white lg:w-auto w-full'>
                    <TextIcon iconSrc="/sendMoney/checkFill.svg" text="shipping fee $15" textClass="!text-[20px] text-black pr-16" iconWidth={20} mainClass="flex flex-row-reverse items-center justify-between w-full  rounded" />
                    <Text className="sf-pro text-[#646464] !text-[18px] " align="left">
                        26th July 2023
                    </Text>
                </div>
                <Button className=" bg-black  px-6 py-3 !text-[18px] rounded lg:block hidden ">
                    Save Shipment
                </Button>
            </div>
            <div className='lg:px-10 px-4 space-y-5 pt-8'>
                <ShippingCard />
                <ShippingCard />
                <ShippingCard />
            </div>
        </div>
    )
}
