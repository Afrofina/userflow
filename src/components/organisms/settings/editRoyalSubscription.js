import React from 'react'
import { Input, Text,Button } from '@/components/atoms'
export default function editRoyalSubscription({ royalRef }) {
    return (
        <div ref={royalRef}>
            <Text className="custom-font !text-[16px] !tracking-widest text-[#333333] lg:block hidden" align="left">
                Royal Subscription
            </Text>
            <Text className="sf-pro !text-[16px] text-[#575757] pt-1" align="left">
                Manage your royal subscription.
            </Text>
            <div className='pt-10 space-y-4'>
                <div className='flex items-center justify-between px-4 py-4 border border-[#333333] rounded'>
                    <div className='flex items-center space-x-3'>
                        <Input className="w-[20px] h-[20px] bg-[#D9D9D9]" type="radio" />
                        <Text className="sf-pro !text-[16px] text-[#333333]">
                            Monthly
                        </Text>
                    </div>
                    <Text className="sf-pro !text-[16px] text-[#333333]">
                        $5/ month
                    </Text>
                </div>
                <div className='flex items-center justify-between px-4 py-4 border border-[#333333] rounded'>
                    <div className='flex items-center space-x-3'>
                        <Input className="w-[20px] h-[20px] bg-[#D9D9D9]" type="radio" />
                        <Text className="sf-pro !text-[16px] text-[#333333]">
                            Yearly
                        </Text>
                    </div>
                    <Text className="sf-pro !text-[16px] text-[#333333]">
                        $50/ month
                    </Text>
                </div>
            </div>
            <Button className="sf-pro text-white bg-black !text-[18px] px-6 py-3 rounded lg:w-auto w-full mt-12">
                Confirm upgrade
            </Button>
        </div>
    )
}
