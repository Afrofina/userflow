import React from 'react'
import { Input, Text, Button } from '@/components/atoms'
export default function () {
    return (
        <div className='space-y-4'>
            <Text className="custom-font !text-[16px] !tracking-widest text-[#333333] lg:block hidden" align="left">
                U-cargo withdraw methods
            </Text>
            <Text className="sf-pro !text-[16px] text-[#575757] pt-1" align="left">
                Add a your bank for withdrawals.
            </Text>
            <Input placeholder="Bank country" />
            <Input placeholder="Routing number" />
            <Input placeholder="Bank name " />
            <Input placeholder="Bank branch" />
            <Input placeholder="Name on account" />
            <Input placeholder="Account number" />

            <Button className="sf-pro text-white bg-black !text-[18px] px-6 py-3 rounded w-full">
                Save
            </Button>
        </div>
    )
}
