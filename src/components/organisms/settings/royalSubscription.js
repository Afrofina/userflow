import React from 'react'
import { Text, Image, Button } from '@/components/atoms'
export default function royalSubscription({royalRef,handleClick}) {
    return (
        <div ref={royalRef}>
            <Text className="custom-font !text-[16px] !tracking-widest text-[#333333] lg:block hidden" align="left">
                Royal Subscription
            </Text>
            <Text className="sf-pro !text-[16px] text-[#575757] pt-1" align="left">
                Manage your royal subscription.
            </Text>
            <div className='flex lg:w-1/2 w-full justify-between pt-10 pb-6'>
                <Text className="sf-pro !text-[14px] text-[#403E3E] " >
                    Current subscription :
                </Text>
                <Text className="sf-pro !text-[14px] text-[#403E3E] ">
                    5$ monthly
                </Text>
            </div>
            <div className='flex space-x-4'>
                <Button className="sf-pro text-white bg-black !text-[18px] px-6 py-3 rounded w-full" onClick={handleClick}>
                    Upgrade plan
                </Button>
                <Button className="sf-pro text-black border border-black !text-[18px] px-6 py-3 rounded w-full">
                    Cancel
                </Button>
            </div>
        </div>
    )
}
