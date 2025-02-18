'use client'
import React, { useState } from 'react'
import { Text, Button, Image } from '@/components/atoms'
import AddCard from './AddCard'
import Link from 'next/link'

export default function () {
    const [isAddCard, setIsCard] = useState(false)
    return (
        <div>
            <Text className="text-black !text-[24px] custom-font !tracking-widest lg:!text-left !text-center" align="left">
                Payment Details
            </Text>
            <Text className="text-black !text-[16px] sf-pro pb-10 lg:!text-left !text-center" align="left">
                Please select or add new payment methods here
            </Text>
            <Text className="text-black !text-[16px] custom-font !tracking-widest pb-4" align="left">
                Pay with Credit card
            </Text>
            {isAddCard ? <AddCard handleClick={() => setIsCard(false)} /> : <div>
                <div className='flex items-center justify-between border border-gray-300 px-3 py-4 rounded cursor-pointer' onClick={() => setIsCard(true)}>
                    <div className='flex items-center space-x-6'>
                        <Image src={'/shop/checkout/add.svg'} width={24} />
                        <div>
                            <Text align="left" className="text-[#707070] !text-[18px] sf-pro">
                                Add a new credit card
                            </Text>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between border border-gray-300 px-3 py-1 rounded mt-3'>
                    <div className='flex items-center space-x-4'>
                        <Image src={'/shop/checkout/card.svg'} width={30} />
                        <div>
                            <Text align="left" className="text-[#707070] !text-[18px] sf-pro">
                                **********4860
                            </Text>
                            <Text align="left" className="text-[#707070] !text-[14px] sf-pro">
                                Visa card
                            </Text>
                        </div>
                    </div>
                    <Text className="text-black !text-[18px] border-b border-black ">
                        Edit
                    </Text>
                </div>
            </div>
            }


            <Text className="text-black !text-[16px] custom-font !tracking-widest pb-4 py-10" align="center">
                OR
            </Text>
            <div className='lg:px-12 px-0'>

            <Link href={`/ecom/shop/overview?type=usdt`}>
                <div className=' items-center space-x-6 grid grid-cols-7 border border-gray-300 px-3  rounded cursor-pointer'>
                    <Image src={'/shop/checkout/usdt.svg'} width={62} />
                    <div className='col-span-5'>
                        <Text align="center" className="text-black !text-[18px] sf-pro" >
                            Pay with USDT
                        </Text>
                    </div>
                    <div>

                    </div>
                </div>
                </Link>
            </div>
            <div className='pt-24'>
                <div className='flex items-center justify-between border-b border-black pb-2'>
                    <Text className="text-black !text-[18px] sf-pro" align="left">
                        Item(s) total
                    </Text>
                    <Text className="text-black !text-[16px] custom-font !tracking-widest" align="left">
                        $110
                    </Text>
                </div>
                <div className='flex items-center justify-between border-b border-black pb-2 pt-2'>
                    <Text className="text-black !text-[18px] sf-pro" align="left">
                        Shipping
                    </Text>
                    <Text className="text-black !text-[16px] custom-font !tracking-widest" align="left">
                        $15
                    </Text>
                </div>
                <div className='flex items-center justify-between pb-2 pt-3'>
                    <div className='flex items-center space-x-1'>
                        <Text className="text-black !text-[24px] custom-font" align="left">
                            total
                        </Text>
                        <Text className="text-black !text-[18px] sf-pro" align="left">
                            (5 items)
                        </Text>
                    </div>
                    <Text className="text-black !text-[16px] custom-font !tracking-widest" align="left">
                        $15
                    </Text>
                </div>
                <div className='px-4 pb-8'>
                    <Link href={`/ecom/shop/overview?type=card`}>
                        <Button className="w-full bg-black  py-3 !text-[18px] rounded mt-8 font-extralight">
                            Purchase
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
