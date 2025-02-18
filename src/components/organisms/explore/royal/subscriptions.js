import React from 'react'
import { Text, Image, Input, Button } from '@/components/atoms'
export default function subscriptions() {
    return (
        <div className='lg:px-6 px-4 pt-8 pb-8'>
            <Text className="text-black !text-[24px] custom-font !tracking-widest lg:!text-left !text-center" align="left">
                Subscriptions
            </Text>
            <Text className="text-black !text-[16px] sf-pro pb-10 lg:!text-left !text-center" align="left">
                Confirm subscription package and proceed
            </Text>
            <div className='space-y-5'>
                <div className='flex items-center space-x-5'>
                    <Input className="w-[24px] h-[24px]" type="radio" />
                    <div className='p-8 border border-black flex items-center space-x-12 rounded w-full'>
                        <Image src={'/explore/royal/plan.svg'} width={40} />
                        <div>
                            <Text className="text-black lg:!text-[24px] !text-[20px] custom-font !tracking-widest " align="left">
                                Monthly
                            </Text>
                            <Text className="text-black lg:!text-[18px] !text-[10px] sf-pro pt-1" align="left">
                                $5/ monthly

                            </Text>
                        </div>
                    </div>
                </div>
                <div className='flex items-center space-x-4'>
                    <Image src={'/sendMoney/checkFill.svg'} />
                    <div className='p-8 border border-black bg-black flex items-center space-x-12 rounded w-full'>
                        <Image src={'/explore/royal/plan.svg'} width={40} />
                        <div>
                            <Text className="text-white lg:!text-[24px] !text-[20px] custom-font !tracking-widest " align="left">
                                Yearly
                            </Text>
                            <Text className="text-white lg:!text-[18px] !text-[10px] sf-pro pt-1" align="left">
                                $50/ monthly

                            </Text>
                        </div>
                    </div>
                </div>
            </div>
            <Text className="text-black !text-[16px] sf-pro pb-10 pt-10" align="center">
                You can cancel your subscription anytime, and if you have an outstanding
                subscription for the month, your subscription will run till the month ends. Enjoy our royal privileges 
            </Text>
                <Button className="w-full bg-black  py-3 !text-[18px] rounded font-extralight">
                    Subscribe
                </Button>
        </div>
    )
}
