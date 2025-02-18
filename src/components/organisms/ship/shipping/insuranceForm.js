import React from 'react'
import { Text, Select, Button } from '@/components/atoms'
import Link from 'next/link'
export default function insuranceForm() {
    return (
        <div className='lg:px-0 px-4'>
            <Text className="!text-[24px] text-black custom-font !tracking-widest" align="center">
                Pick up
            </Text>
            <Text className="!text-[20px] text-black sf-pro pt-3" align="center">
                Verify your pick up address and choose when and how <br /> goods are picked up.
            </Text>
            <Text className="!text-[20px] text-black custom-font !tracking-widest py-10" align="center">
                Select pick-up method
            </Text>
            <Select placeholderValue="Pick-up by Afrofina " icon="/ship/down.svg" className="pr-3 w-full" />
            <Text className="!text-[20px] text-black custom-font !tracking-widest pt-10 pb-8" align="left">
                Your pick-up address
            </Text>
            <div className='border border-gray-200 p-3 rounded-md space-y-2'>
                <Text className="!text-[18px] text-[#707070] sf-pro" align="left">
                    Lena Ablah
                </Text>
                <Text className="!text-[18px] text-[#707070] sf-pro" align="left">
                    Lena Ablah Enterprise
                </Text>
                <Text className="!text-[18px] text-[#707070] sf-pro" align="left">
                    +233 (554) 447-8672
                </Text>
                <Text className="!text-[18px] text-[#707070] sf-pro" align="left">
                    Lenaablah@gmail.com
                </Text>
                <div className='flex items-center justify-between'>
                    <Text className="!text-[18px] text-[#707070] sf-pro" align="left">
                        Abena creek  block 6 Oyarifa, accra ghana
                    </Text>
                    <Text className="!text-[18px] text-black sf-pro border-b border-black cursor-pointer pb-1" align="left">
                        Edit
                    </Text>
                </div>
            </div>
            <Text className="!text-[20px] text-black custom-font !tracking-widest pt-10 pb-8" align="center">
                Select Pick-up Date
            </Text>
            <Select placeholderValue="28/07/2023 " icon="/ship/calendarAdd.svg" className="pr-3 w-full" />
            <Text className="!text-[20px] text-black custom-font !tracking-widest pt-10 pb-8" align="center">
                Select Delivery Method
            </Text>
            <Select placeholderValue="Delivery by Afrofina  " icon="/ship/down.svg" className="pr-3 w-full" />
            <Text className="!text-[20px] text-black custom-font !tracking-widest pt-10 pb-8" align="left">
                Delivery address
            </Text>
            <div className='border border-gray-200 p-3 rounded-md space-y-2'>
                <Text className="!text-[18px] text-[#707070] sf-pro" align="left">
                    Lena Ablah
                </Text>
                <Text className="!text-[18px] text-[#707070] sf-pro" align="left">
                    Lena Ablah Enterprise
                </Text>
                <Text className="!text-[18px] text-[#707070] sf-pro" align="left">
                    +233 (554) 447-8672
                </Text>
                <Text className="!text-[18px] text-[#707070] sf-pro" align="left">
                    Lenaablah@gmail.com
                </Text>
                <div className='flex items-center justify-between'>
                    <Text className="!text-[18px] text-[#707070] sf-pro" align="left">
                        Abena creek  block 6 Oyarifa, accra ghana
                    </Text>
                    <Text className="!text-[18px] text-black sf-pro border-b border-black cursor-pointer pb-1" align="left">
                        Edit
                    </Text>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 pt-10 pb-8'>
                <Button className="border bg-white border-black text-black py-3 !text-[20px] rounded ">
                    Save
                </Button>
                <Link href={'/ecom/ship/standard-shipping/summary'}>
                    <Button className=" bg-black py-3 !text-[20px] rounded w-full">
                        Continue
                    </Button>
                </Link>
            </div>
        </div>
    )
}
