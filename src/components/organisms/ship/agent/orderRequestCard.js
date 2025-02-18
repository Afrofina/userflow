import { Input, Text, Button } from '@/components/atoms'
import React from 'react'
import Link from 'next/link'
export default function orderRequestCard() {
    return (
        <div className='flex lg:flex lg:flex-row flex-col justify-between items-center lg:space-x-10 space-x-0 lg:space-y-0 space-y-5'>
            <div className='flex items-center space-x-5'>
                <Input type="checkbox" className="w-[20px] h-[20px] rounded" />
                <div className='!w-[74px] !h-[74px]' style={{ backgroundImage: `url('/ship/box.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                </div>
                <div >
                    <div className='flex justify-between items-center'>
                        <Text className="custom-font !text-[16px] text-black !tracking-widest" align="left">
                            Books
                        </Text>
                        <Text className="sf-pro !text-[14px] text-black " align="left">
                            10KG
                        </Text>
                    </div>
                    <Text className="sf-pro !text-[14px] text-[#969696] pt-4 " align="left">
                        Sending theses books to my niece at
                        dallas, texas usa
                    </Text>
                </div>
            </div>
            <div className='flex flex-col items-stretch lg:w-auto w-full'>

                <Button className="text-white border text[14px] bg-black w-auto py-1 px-0  rounded sf-pro">
                    Accept Request
                </Button>
                <Link href={'/ecom/ship/u-cargo-agent/view-request'} className='w-full'>
                <Button className="text-black border text[14px] border-black py-1 px-0 rounded mt-3 sf-pro w-full">
                    View  Request
                </Button>
                </Link>
            </div>
        </div>
    )
}
