'use client'
import React, { useState } from 'react'
import { Image, Text, Button, Input } from '@/components/atoms'
import Link from 'next/link'
export default function shippingCard() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='pt-10 pb-3 lg:px-6 px-3 border border-gray-200 bg-white rounded-md'>
            <div className='flex lg:items-stretch items-start space-x-6'>
                <Image src={'/ship/plane.svg'} width={164.98} height={110} className={'lg:w-[164.98px] w-[58px]'} />
                <div className='flex lg:flex-row flex-col justify-between'>
                    <div className='flex-col justify-between h-full space-y-4'>
                        <Text className="!text-[16px] text-black sf-pro !font-extralight" align="left">
                            Express Shipping
                        </Text>
                        <div className='flex  items-center lg:space-x-3 space-x-2'>
                            <Text className="lg:!text-[20px] !text-[14px] text-black custom-font !tracking-widest" align="center">
                                Tue, 1 August
                            </Text>
                            <Text className="lg:!text-[20px] !text-[14px]] text-black sf-pro !font-extralight border-l border-black lg:pl-3 pl-2">
                                Latest by end of day
                            </Text>
                        </div>
                        <Text className="!text-[14px] text-black sf-pro !font-extralight lg:w-2/3 w-full" align="left">
                            Book by 26/07/2023 for estimated pick-up on
                            28/07/2023 confirmed by customer service after booking
                        </Text>
                    </div>
                    <div className='lg:w-1/3 w-full flex flex-col justify-between'>
                        <div className='flex justify-between items-end'>
                            <Text className="!text-[14px] text-black sf-pro !font-extralight" align="left">
                                Price from
                            </Text>
                            <Text className="!text-[24px] text-black sf-pro !font-extralight" align="left">
                                $4,200.20
                            </Text>
                        </div>
                        <Link href={'/ecom/ship/standard-shipping/insurance'}>
                            <Button className=" bg-primary text-black  w-full py-3 !text-[18px] rounded mt-4 ">
                                Continue to booking
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            {!isOpen && <div className='flex justify-end pt-3 pr-4'>
                <Image src={'/ship/down.svg'} className={'cursor-pointer'} onClick={() => setIsOpen(true)} />
            </div>}
            {isOpen && <div className='pt-8'>
                <div className='border-y border-black py-6 flex lg:flex-row flex-col justify-between'>
                    <div>
                        <Text className="!text-[20px] text-black custom-font !tracking-widest" align="left">
                            Included in this Offer
                        </Text>
                        <div className='space-y-1 pt-3'>
                            <div className='flex items-baseline space-x-4 pl-3'>
                                <div className='w-2 h-2 bg-black rounded-full'>

                                </div>
                                <Text className="!text-[16px] text-black sf-pro !font-extralight" align="left">
                                    Economical, door-to-door, Air Freight service
                                </Text>
                            </div>
                            <div className='flex items-baseline space-x-4 pl-3'>
                                <div className='w-2 h-2 bg-black rounded-full'>

                                </div>
                                <Text className="!text-[16px] text-black sf-pro !font-extralight" align="left">

                                    Track & trace
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/3 w-full'>
                        <Text className="!text-[20px] text-black custom-font !tracking-widest" align="left">
                            Optional Add-ons
                        </Text>
                        <div className='flex justify-between items-center border-y border-black py-2 mt-2'>
                            <Text className="!text-[16px] text-black sf-pro !font-extralight" align="left">
                                Insurance
                            </Text>
                            <Image src={'/ship/down.svg'} className={'cursor-pointer'} />
                        </div>
                        <Text className="!text-[14px] text-black sf-pro !font-extralight pt-2" align="left">
                            Financial protection of your shipment value (including transportation costs) against risks of physical shipment loss or damage, from external causes (Terms and Conditions apply; additional charges apply)
                        </Text>
                    </div>
                </div>
                <Text className="!text-[20px] text-black custom-font !tracking-widest pt-8" align="left">
                    What value of goods would you like to insure
                </Text>
                <div className='flex justify-between border border-black rounded-md py-2 px-3 mt-6'>
                    <Input className="w-full text-black placeholder-black text-[18px] focus:outline-none" placeholder />
                    <Text className="!text-[18px] text-black sf-pro !font-extralight" align="left">
                        USD
                    </Text>
                </div>
                <div className='flex justify-between pt-4 pb-6'>
                    <Text className="!text-[20px] text-black custom-font !tracking-widest pt-8" align="left">
                        0 USD
                    </Text>
                    <Button className=" bg-black  px-6 py-3 !text-[16px] rounded mt-4 ">
                        Add cargo insurance
                    </Button>
                </div>
            </div>}
        </div>
    )
}
