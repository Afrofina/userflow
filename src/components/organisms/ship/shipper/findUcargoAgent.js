import { Select, Text } from '@/components/atoms'
import React from 'react'

export default function FindUcargoAgent() {
    return (
        <div>
            <Text className="text-black !text-[24px] custom-font !tracking-widest pb-8 pt-4" align="center">
                Find a U-cargo agent
            </Text>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 lg:px-10 px-4 py-6'>
                <div className='space-y-6 lg:col-span-1 col-span-2'>
                    <Text className="text-[#575757] !text-[16px] custom-font !tracking-widest" align="left">
                        Weight range
                    </Text>
                    <Select icon="/ship/down.svg" className="px-3 !rounded-md w-full" placeholderValue="KG" />
                </div>
                <div className='space-y-6 lg:col-span-1 col-span-2'>
                    <Text className="text-[#575757] !text-[16px] custom-font !tracking-widest" align="left">
                        Date range
                    </Text>
                    <Select icon="/ship/calendar.svg" className="px-3 !rounded-md w-full" placeholderValue="Select Date" />
                </div>
                <div className='space-y-6  col-span-2'>
                    <Text className="text-[#575757] !text-[16px] custom-font !tracking-widest" align="left">
                        Departing from
                    </Text>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
                        <Select icon="/ship/down.svg" className="px-3 !rounded-md w-full" placeholderValue="Select Country " />
                        <Select icon="/ship/down.svg" className="px-3 !rounded-md w-full" placeholderValue="Select City " />

                    </div>
                </div>
                <div className='space-y-6  col-span-2'>
                    <Text className="text-[#575757] !text-[16px] custom-font !tracking-widest" align="left">
                    Destination
                    </Text>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
                        <Select icon="/ship/down.svg" className="px-3 !rounded-md w-full" placeholderValue="Select Country " />
                        <Select icon="/ship/down.svg" className="px-3 !rounded-md w-full" placeholderValue="Select City " />

                    </div>
                </div>
            </div>
        </div>
    )
}
