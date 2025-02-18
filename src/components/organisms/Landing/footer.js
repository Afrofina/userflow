import React from 'react'
import { Text, Input, Button } from '@/components/atoms'
export default function footer() {
    return (
        <div className='lg:border border-y border-primary grid lg:grid-cols-3 grid-cols-1'>
            <div>
                <Text className="text-black !text-[24px] custom-font !tracking-widest border-b border-primary py-2 pl-[38%]" align="left">
                    Helpful Links
                </Text>
                <div className='py-5 space-y-5'>
                    <Text className="text-black !text-[18px]  pl-[38%] sf-pro" align="left">
                        Become a partner
                    </Text> <Text className="text-black !text-[18px]  pl-[38%] sf-pro" align="left">
                        Become a u-cargo agent
                    </Text> <Text className="text-black !text-[18px]  pl-[38%] sf-pro" align="left">
                        Join the royals
                    </Text>
                </div>
            </div>
            <div className='lg:border-x border-x-0 lg:border-y-0 border-y border-primary'>
                <Text className="text-black !text-[24px] custom-font !tracking-widest border-b border-primary py-2 pl-[38%]" align="left">
                    Shipping
                </Text>
                <div className='py-5 space-y-5'>
                    <Text className="text-black !text-[18px]  pl-[38%] sf-pro" align="left">
                        Track a package
                    </Text> <Text className="text-black !text-[18px]  pl-[38%] sf-pro" align="left">
                        Ship a package
                    </Text> <Text className="text-black !text-[18px]  pl-[38%] sf-pro" align="left">
                        U-cargo shipping
                    </Text>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center lg:py-0 py-5'>
                <Text className="text-black !text-[24px] custom-font !tracking-widest py-2" align="left">
                    Newsletter
                </Text>
                <Text className="text-black !text-[18px]  sf-pro" align="left">
                    Subscribe for feature updates , promos and more
                </Text>
                <div className='flex border border-black p-0.5 rounded-full mt-6'>
                    <input placeholder='Enter email' className='bg-transparent placeholder-black sf-pro text-[18px] w-full pl-2' />
                    <Button className="bg-black text-white sf-pro text-[18px] rounded-full px-5 py-2">
                        subscribe
                    </Button>
                </div>
            </div>
        </div>
    )
}
