import React from 'react'
import { Text, Button, Image } from '@/components/atoms'
export default function billingAddress() {
    return (
        <div className='lg:px-16 px-4 pt-8'>
            <Text className="text-black !text-[24px] custom-font !tracking-widest lg:!text-left !text-center" align="left">
                Billing address
            </Text>
            <Text className="text-black !text-[16px] sf-pro pb-10 lg:!text-left !text-center" align="left">
                Please enter where you would like for your good to be delivered to
            </Text>
            <div>
                <div className='flex items-center justify-between border border-gray-300 px-3 py-2 rounded'>
                    <div>
                        <Text align="left" className="text-[#707070] !text-[18px] sf-pro">
                            Lena Ablah
                        </Text>
                        <Text align="left" className="text-[#707070] !text-[18px] sf-pro">
                            Abena creek  block 6 Oyarifa, accra ghana
                        </Text>
                    </div>
                    <Text className="text-black !text-[18px] border-b border-black cursor-pointer ">
                        Edit
                    </Text>
                </div>
                <Button className="w-full bg-black  py-3 !text-[18px] rounded mt-8 font-extralight">
                    Add new address
                </Button>
            </div>
            <Text className="text-black !text-[24px] custom-font !tracking-widest lg:!text-left !text-center pt-16" align="left">
                Payment Details
            </Text>
            <Text className="text-black !text-[16px] sf-pro pb-10 lg:!text-left !text-center" align="left">
                Please select or add new payment methods here
            </Text>
            <Text className="text-black !text-[16px] custom-font !tracking-widest pb-4" align="left">
                Pay with Credit card
            </Text>
            <div>
                <div className='flex items-center justify-between border border-gray-300 px-3 py-4 rounded cursor-pointer'>
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
        </div>
    )
}
