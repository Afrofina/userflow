import React from 'react'
import { Text, Button } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
import Link from 'next/link'
export default function agentInfo() {
    return (
        <div className='pb-12'>
            <div className='grid grid-cols-2 gap-8'>
                <div className='!h-[178px] rounded-md' style={{ backgroundImage: `url('/ship/agent.png')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                </div>
                <div className='flex flex-col justify-between'>
                    <div className='flex justify-between items-end'>
                        <Text className="text-black custom-font !text-[16px] !tracking-widest">
                            Jenny William
                        </Text>
                        <Text className="text-black custom-font !text-[14px] !tracking-widest">
                            $50/10kg
                        </Text>
                    </div>
                    <div>
                        <TextIcon text="Johnrahul@gmail.com" iconSrc="/ship/message.svg" textClass="text-[#575757] !text-[16px] sf-pro" mainClass="flex items-center space-x-2" />
                        <TextIcon text="+233-559-256-3001" iconSrc="/ship/phone.svg" textClass="text-[#575757] !text-[16px] sf-pro" mainClass="flex items-center space-x-2 pt-1" />
                        <Button className="w-full bg-black  py-3 !text-[14px] rounded mt-4 font-extralight">
                            Message
                        </Button>
                    </div>
                </div>
            </div>
            <Text className="text-black custom-font !text-[18px] !tracking-widest pt-12 pb-4" align="left">
                Trip Details
            </Text>
            <div className='shadow p-4 space-y-4'>
                <div className='flex justify-between' >
                    <Text className="text-[#575757] sf-pro !text-[16px]">
                        Departing from
                    </Text>
                    <Text className="text-[#575757] sf-pro !text-[16px]">
                        Ghana
                    </Text>
                </div>
                <div className='flex justify-between' >
                    <Text className="text-[#575757] sf-pro !text-[16px]">
                        Departing date
                    </Text>
                    <Text className="text-[#575757] sf-pro !text-[16px]">
                        07/07/2023
                    </Text>
                </div>
                <div className='flex justify-between' >
                    <Text className="text-[#575757] sf-pro !text-[16px]">
                        Departing time
                    </Text>
                    <Text className="text-[#575757] sf-pro !text-[16px]">
                        00:30am
                    </Text>
                </div>
                <div className='flex justify-between' >
                    <Text className="text-[#575757] sf-pro !text-[16px]">
                        Destination
                    </Text>
                    <Text className="text-[#575757] sf-pro !text-[16px]">
                        Tx, USA
                    </Text>
                </div>
            </div>
            <Text className="text-black custom-font !text-[18px] !tracking-widest py-4" align="left">
                Supported  Packages
            </Text>
            <div className='shadow p-4 space-y-4'>
                <Text className="text-[#575757] sf-pro !text-[16px]" align="left">
                    Electrical Gadgets
                </Text>
                <Text className="text-[#575757] sf-pro !text-[16px]" align="left">
                    Clothes
                </Text>
            </div>
            <Text className="text-black custom-font !text-[18px] !tracking-widest py-4" align="left">
                Pickup methods
            </Text>
            <div className='shadow p-4 space-y-4'>
                <div className='grid grid-cols-2' >
                    <Text className="text-[#575757] sf-pro !text-[16px]" align="left">
                        Pickup within:
                    </Text>
                    <div className='flex items-center justify-between'>
                        <Text className="text-[#575757] sf-pro !text-[16px] pl-7">
                            City: Accra
                        </Text>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            Fee: $10
                        </Text>
                    </div>
                </div>
                <div className='flex justify-between' >
                    <Text className="text-[#575757] sf-pro !text-[16px]">
                        Drop off location:
                    </Text>
                    <Text className="text-[#575757] sf-pro !text-[16px]">
                        Afrofina head office Accra
                    </Text>
                </div>
            </div>
            <Link href="/ecom/ship/u-cargo-shipper/book">
                <Button className="w-full bg-black  py-3 !text-[14px] rounded mt-4 font-extralight">
                    Book agent
                </Button>
            </Link>
        </div>
    )
}
