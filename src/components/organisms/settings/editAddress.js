import React from 'react'
import { Text, Button } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
export default function EditAddress({ refAddress }) {
    return (
        <div ref={refAddress}>
            <Text className="custom-font !text-[16px] !tracking-widest text-[#333333] lg:block hidden" align="left">
                Address
            </Text>
            <Text className="sf-pro !text-[16px] text-[#575757] pt-1" align="left">
                This address would be used for billing and delivery
            </Text>
            <div className='flex lg:flex-row flex-col gap-12 items-start pt-10'>
                <div className='grid lg:grid-cols-2 grid-cols-1 w-full gap-5'>
                    <div className='flex lg:flex-col flex-row lg:justify-start justify-between'>
                        <Text className="sf-pro !text-[16px] text-[#575757]" align="left">
                            Address
                        </Text>
                        <Text className="sf-pro !text-[18px] text-black pt-1" align="left">
                            21st street oyarifa
                        </Text>
                    </div>
                    <div className='flex lg:flex-col flex-row lg:justify-start justify-between'>
                        <Text className="sf-pro !text-[16px] text-[#575757]" align="left">
                            City
                        </Text>
                        <Text className="sf-pro !text-[18px] text-black pt-1" align="left">
                            Madina
                        </Text>
                    </div>
                    <div className='flex lg:flex-col flex-row lg:justify-start justify-between'>
                        <Text className="sf-pro !text-[16px] text-[#575757]" align="left">
                            Region
                        </Text>
                        <Text className="sf-pro !text-[18px] text-black pt-1" align="left">
                            Greater Accra
                        </Text>
                    </div>
                    <div className='flex lg:flex-col flex-row lg:justify-start justify-between'>
                        <Text className="sf-pro !text-[16px] text-[#575757]" align="left">
                            Country
                        </Text>
                        <Text className="sf-pro !text-[18px] text-black pt-1" align="left">
                            Ghana
                        </Text>
                    </div>
                </div>

                <Button className="sf-pro text-white bg-black !text-[18px] px-6 py-3 rounded w-full">
                    Save
                </Button>
            </div>
        </div>
    )
}
